import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkTest from '../lib/runer-cdk-stack';

test('SAMStack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkTest.RunerCdkStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    haveResource('AWS::Lambda::Function', {
      FunctionName: 'legibilityTestSync-lambda-function'
    })
  );
});
