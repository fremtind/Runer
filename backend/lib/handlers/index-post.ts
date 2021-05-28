import { AttributeValue, DynamoDBClient, GetItemCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";

const dynamoClient = new DynamoDBClient({});

interface SessionTestResult {
    client_id: string;
    session_id: string;
    testResult: {
        styles: {
            backgroundColor: string;
            color: string;
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
        };
        text: string;
        duration: number;
        metadata: {
            resolution: {
                height: number;
                width: number;
            };
            windowSize: {
                height: number;
                width: number;
            };
            pixelRatio: number;
        };
    };
}
interface QuestionareResult {
    client_id: string;
    session_id: string;
    questionaire: {
        age: string;
        eyesight: string;
        aid: string;
    };
}
interface DbSessionTestResultRow {
    client_id: string;
    session_id: string;
    results: {
        styles: string;
        text: string;
        duration: number;
    }[];
    questionaire: {
        age: string;
        eyesight: string;
        aid: string;
    }[];
}

const isSessionTestResult = (data: SessionTestResult | QuestionareResult): data is SessionTestResult => {
    return (data as SessionTestResult).testResult !== undefined;
};

const isQuestionaireResult = (data: SessionTestResult | QuestionareResult): data is QuestionareResult => {
    return (data as QuestionareResult).questionaire !== undefined;
};

const now = new Date();
const nowStr = now.toISOString();

// eslint-disable-next-line
export const handler: any = async (event: any, _context: any, callback: any) => {
    const requestBody: SessionTestResult | QuestionareResult = JSON.parse(event.body);

    let body;
    let statusCode = "200";
    const headers = {
        "Content-Type": "application/json",
    };

    try {
        switch (event.httpMethod) {
            case "POST":
                const getItemCommand = new GetItemCommand({
                    Key: {
                        session_id: {
                            S: requestBody.session_id,
                        },
                    },
                    TableName: process.env.TABLE_NAME,
                });

                const item = await dynamoClient.send(getItemCommand);

                if (!item.Item) {
                    console.log("Creating new entry");

                    let newItem;

                    if (isSessionTestResult(requestBody)) {
                        console.log("Creating test result");
                        newItem = {
                            session_id: { S: requestBody.session_id },
                            client_id: { S: requestBody.client_id },
                            created_at: { S: nowStr },
                            results: {
                                L: [
                                    {
                                        M: {
                                            styles: {
                                                M: {
                                                    backgroundColor: {
                                                        S: requestBody.testResult.styles.backgroundColor,
                                                    },
                                                    color: {
                                                        S: requestBody.testResult.styles.color,
                                                    },
                                                    fontSize: {
                                                        S: requestBody.testResult.styles.fontSize,
                                                    },
                                                    lineHeight: {
                                                        S: requestBody.testResult.styles.lineHeight,
                                                    },
                                                },
                                            },
                                            text: {
                                                S: requestBody.testResult.text,
                                            },
                                            duration: {
                                                N: requestBody.testResult.duration.toString(),
                                            },
                                            metadata: {
                                                M: {
                                                    resolution: {
                                                        M: {
                                                            height: {
                                                                N: requestBody.testResult.metadata.resolution.height.toString(),
                                                            },
                                                            width: {
                                                                N: requestBody.testResult.metadata.resolution.width.toString(),
                                                            },
                                                        },
                                                    },
                                                    windowSize: {
                                                        M: {
                                                            height: {
                                                                N: requestBody.testResult.metadata.windowSize.height.toString(),
                                                            },
                                                            width: {
                                                                N: requestBody.testResult.metadata.windowSize.width.toString(),
                                                            },
                                                        },
                                                    },
                                                    pixelRatio: {
                                                        N: requestBody.testResult.metadata.pixelRatio.toString(),
                                                    },
                                                },
                                            },
                                            created_at: { S: nowStr },
                                        },
                                    },
                                ],
                            },
                            questionaire: {
                                L: [],
                            },
                        };
                    }

                    if (isQuestionaireResult(requestBody)) {
                        console.log("Creating questionaire result");
                        newItem = {
                            session_id: { S: requestBody.session_id },
                            client_id: { S: requestBody.client_id },
                            created_at: { S: nowStr },
                            results: {
                                L: [],
                            },
                            questionaire: {
                                L: [
                                    {
                                        M: {
                                            age: {
                                                N: requestBody.questionaire.age.toString(),
                                            },
                                            eyesight: {
                                                S: requestBody.questionaire.eyesight,
                                            },
                                            aid: {
                                                S: requestBody.questionaire.aid,
                                            },
                                            created_at: { S: nowStr },
                                        },
                                    },
                                ],
                            },
                        } as { [key: string]: AttributeValue };
                    }

                    console.log("New item", JSON.stringify(newItem));

                    if (newItem) {
                        const putCommand = new PutItemCommand({
                            Item: newItem,
                            TableName: process.env.TABLE_NAME,
                        });

                        const d = await dynamoClient.send(putCommand);
                        console.log(d);
                    }
                } else {
                    console.log("Updating existing entry");

                    let updatedItem = { ...item.Item };

                    if (isSessionTestResult(requestBody)) {
                        console.log("Updating test result");
                        updatedItem = {
                            ...updatedItem,
                            results: {
                                L: [
                                    // @ts-ignore
                                    ...updatedItem.results.L,
                                    {
                                        M: {
                                            styles: {
                                                M: {
                                                    backgroundColor: {
                                                        S: requestBody.testResult.styles.backgroundColor,
                                                    },
                                                    color: {
                                                        S: requestBody.testResult.styles.color,
                                                    },
                                                    fontSize: {
                                                        S: requestBody.testResult.styles.fontSize,
                                                    },
                                                    lineHeight: {
                                                        S: requestBody.testResult.styles.lineHeight,
                                                    },
                                                },
                                            },
                                            text: {
                                                S: requestBody.testResult.text,
                                            },
                                            duration: {
                                                N: requestBody.testResult.duration.toString(),
                                            },
                                            metadata: {
                                                M: {
                                                    resolution: {
                                                        M: {
                                                            height: {
                                                                N: requestBody.testResult.metadata.resolution.height.toString(),
                                                            },
                                                            width: {
                                                                N: requestBody.testResult.metadata.resolution.width.toString(),
                                                            },
                                                        },
                                                    },
                                                    windowSize: {
                                                        M: {
                                                            height: {
                                                                N: requestBody.testResult.metadata.windowSize.height.toString(),
                                                            },
                                                            width: {
                                                                N: requestBody.testResult.metadata.windowSize.width.toString(),
                                                            },
                                                        },
                                                    },
                                                    pixelRatio: {
                                                        N: requestBody.testResult.metadata.pixelRatio.toString(),
                                                    },
                                                },
                                            },
                                            created_at: { S: nowStr },
                                        },
                                    },
                                ],
                            },
                        };
                    }

                    if (isQuestionaireResult(requestBody)) {
                        console.log("Updating questionaire result");
                        updatedItem = {
                            ...updatedItem,
                            questionaire: {
                                L: [
                                    ...updatedItem.questionaire.L,
                                    {
                                        M: {
                                            age: {
                                                N: requestBody.questionaire.age.toString(),
                                            },
                                            eyesight: {
                                                S: requestBody.questionaire.eyesight,
                                            },
                                            aid: {
                                                S: requestBody.questionaire.aid,
                                            },
                                            created_at: { S: nowStr },
                                        },
                                    },
                                ],
                            },
                        };
                    }

                    const putCommand = new PutItemCommand({
                        Item: updatedItem,
                        TableName: process.env.TABLE_NAME,
                    });

                    const d = await dynamoClient.send(putCommand);
                    console.log(d);
                }
                break;
            default:
                throw new Error(`Unsupported method "${event.httpMethod}"`);
        }
    } catch (err) {
        statusCode = "400";
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};
