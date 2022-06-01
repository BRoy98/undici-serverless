"use strict";
const { request } = require("undici");

module.exports.hello = async (event) => {
  const { statusCode, headers, trailers, body } = await request(
    "http://localhost:3000/foo"
  );

  console.log("response received", statusCode);
  console.log("headers", headers);

  for await (const data of body) {
    console.log("data", data);
  }

  console.log("trailers", trailers);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
