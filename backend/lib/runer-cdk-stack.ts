import { Stack, StackProps, App, Duration, RemovalPolicy, Fn } from "@aws-cdk/core";
import { LambdaRestApi } from "@aws-cdk/aws-apigateway";
import { Certificate } from "@aws-cdk/aws-certificatemanager";
import {
    ViewerProtocolPolicy,
    OriginAccessIdentity,
    CloudFrontAllowedMethods,
    CloudFrontWebDistribution,
} from "@aws-cdk/aws-cloudfront";
import { BucketDeployment, Source } from "@aws-cdk/aws-s3-deployment";
import { Table, AttributeType } from "@aws-cdk/aws-dynamodb";
import { Effect, ManagedPolicy, PolicyDocument, PolicyStatement, Role, ServicePrincipal } from "@aws-cdk/aws-iam";
import { Runtime, Function, Code, CfnPermission } from "@aws-cdk/aws-lambda";
import { BlockPublicAccess, Bucket, HttpMethods } from "@aws-cdk/aws-s3";

/**
 * Creates template lambda function
 */
export class RunerCdkStack extends Stack {
    constructor(scope: App, id: string, props?: StackProps) {
        super(scope, id, props);

        const role = new Role(this, "FunctionRole", {
            assumedBy: new ServicePrincipal("lambda.amazonaws.com"),
            description: "Lambda execution role",
            path: "/",
            roleName: "ds-legibility-test-function.iam.role",
            managedPolicies: [
                ManagedPolicy.fromManagedPolicyArn(
                    this,
                    "LambdaBasicExecutionRole",
                    "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
                ),
            ],
            inlinePolicies: {
                LambdaPermissions: new PolicyDocument({
                    statements: [
                        new PolicyStatement({
                            effect: Effect.ALLOW,
                            actions: ["dynamodb:*"],
                            resources: ["*"],
                        }),
                    ],
                }),
            },
        });

        const table = new Table(this, "DynamoDbLegibilityTable", {
            partitionKey: { name: "session_id", type: AttributeType.STRING },
        });

        const handler = new Function(this, "PostTestdata", {
            runtime: Runtime.NODEJS_14_X,
            handler: "index-post.handler",
            code: Code.fromAsset("./lib/handlers"),
            environment: {
                TABLE_NAME: table.tableName,
            },
            role: role,
            description: "Backend for Runer Legibility test",
            functionName: "legibilityTestSync-lambda-function",
            timeout: Duration.seconds(30),
        });

        table.grantReadWriteData(handler);

        const api = new LambdaRestApi(this, "runer-api", {
            handler: handler,
            description: "Backend functionality for Runer",
            proxy: false,
        });

        const root = api.root.addResource("api").addResource("result");
        root.addMethod("GET");
        root.addMethod("POST");

        new CfnPermission(this, "WebhookPOSTPermission", {
            action: "lambda:invokeFunction",
            functionName: handler.functionName,
            principal: "apigateway.amazonaws.com",
            sourceArn: `arn:aws:execute-api:${Fn.ref("AWS::Region")}:${Fn.ref("AWS::AccountId")}:${api.restApiId}/*`,
        });

        const cloudfrontOAI = new OriginAccessIdentity(this, "cloudfrontOAI", {
            comment: `Allows CloudFront access to S3 bucket`,
        });

        const bucket = new Bucket(this, "LegibilityTestFrontend", {
            blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
            removalPolicy: RemovalPolicy.DESTROY,
            websiteIndexDocument: "index.html",
            websiteErrorDocument: "index.html",
            bucketName: "runer-legitibility-test-public-frontend",
            cors: [
                {
                    allowedOrigins: ["*"],
                    allowedMethods: [HttpMethods.GET],
                    maxAge: 3000,
                },
            ],
        });

        new BucketDeployment(this, "DeployStaticWebsite", {
            sources: [Source.asset("../user-front/build")],
            destinationBucket: bucket,
        });

        bucket.addToResourcePolicy(
            new PolicyStatement({
                sid: "Grant Cloudfront Origin Access Identity access to S3 bucket",
                actions: ["s3:GetObject"],
                resources: [bucket.bucketArn + "/*"],
                principals: [cloudfrontOAI.grantPrincipal],
            }),
        );

        const ioCert = Certificate.fromCertificateArn(this, "RunerFremtindIoCertificate", process.env.RUNER_IO_CERT!);

        // const noCert = Certificate.fromCertificateArn(
        //     this,
        //     "RunerFremtindNoCertificate",
        //     "arn:aws:acm:us-east-1:126372280149:certificate/f6e6d4a0-4c5d-4be7-87ff-dcdd3e51f47d",
        // );

        new CloudFrontWebDistribution(this, "RunerCloudFront", {
            comment: "CDN Runer web app",
            defaultRootObject: "index.html",
            viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            viewerCertificate: {
                aliases: ["runer.fremtind.io" /* , "runer.fremtind.no" */],
                props: {
                    acmCertificateArn: ioCert.certificateArn,
                    sslSupportMethod: "sni-only",
                },
            },
            errorConfigurations: [{ responseCode: 200, errorCode: 403, responsePagePath: "/index.html" }],
            originConfigs: [
                {
                    // make sure your backend origin is first in the originConfigs list so it takes precedence over the S3 origin
                    customOriginSource: {
                        domainName: `${api.restApiId}.execute-api.${this.region}.amazonaws.com`,
                        originPath: "/prod",
                    },
                    behaviors: [
                        {
                            pathPattern: "/api/*", // CloudFront will forward `/api/*` to the backend so make sure all your routes are prepended with `/api/`
                            allowedMethods: CloudFrontAllowedMethods.ALL,
                            defaultTtl: Duration.seconds(0),
                            forwardedValues: {
                                queryString: true,
                            },
                        },
                    ],
                },
                {
                    s3OriginSource: {
                        s3BucketSource: bucket,
                        originAccessIdentity: cloudfrontOAI,
                    },
                    behaviors: [
                        {
                            compress: true,
                            isDefaultBehavior: true,
                            defaultTtl: Duration.seconds(0),
                            allowedMethods: CloudFrontAllowedMethods.GET_HEAD_OPTIONS,
                        },
                    ],
                },
            ],
        });
    }
}
