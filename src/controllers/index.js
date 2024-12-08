
exports.getMsg = (req, res) => {
  res.send('Hello NodeJs !');
};

exports.getEnv = (req, res) => {
  res.send(process.env);
};
