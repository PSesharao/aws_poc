const DynamoDB = require("aws-sdk/clients/dynamodb");
const call = require("./call");
const docClient = new DynamoDB.DocumentClient({
  region: "ap-south-1",
  maxRetries: 3,
  httpOptions: {
    timeout: 5000,
  },
});
const CERTIFICATE_TABLE_NAME = process.env.CERTIFICATE_TABLE_NAME;

module.exports.certificate = async (event, context, callback) => {
  let data = JSON.parse(event.body);
  try {
    const params = {
      TableName: CERTIFICATE_TABLE_NAME,
      Item: {
        certificationId: data.certificationId,
        userEmail: data.userEmail,
        userName: data.userName,
        certificateName: data.certificateName,
      },
    };

    const result = await docClient.put(params).promise();

    callback(null, call.statement(201, data));
  } catch (error) {
    callback(null, call.statement(500, error));
  }
};
