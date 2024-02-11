const statement = (statusCode, data) => {
  return {
    statusCode,
    body: JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET , POST , PUT , DELETE",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
    },
  };
};

module.exports = {
  statement,
};
