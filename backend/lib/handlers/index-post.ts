import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';

const dynamoClient = new DynamoDBClient({});

// eslint-disable-next-line
export const handler: any = async (event: any, _context: any, callback: any) => {
  console.log(`Event: ${event}`);
  // console.log(`Context: ${context}`);
  console.log(process.env);

  const command = new PutItemCommand({
    Item: {
      session_id: { S: '12345' },
      hello_world: {
        S: 'Yolo!'
      }
    },
    TableName: process.env.TABLE_NAME
  });

  const d = await dynamoClient.send(command);

  callback(undefined, {
    statusCode: 200,
    body: JSON.stringify({ ...d, yolo: true })
  });
};
