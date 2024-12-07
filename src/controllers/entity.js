const Data = require('../services');



exports.list = async (req, res) => {
  const list = await Data.list();
  res.send(list);
};

exports.post = async (req, res) => {
  let data = req.body;
  data = await Data.add(data);
  res.send(data);
};

exports.put = async (req, res) => {
  const { id, ...updates } = req.body;
  await Data.update(id, updates);
  res.sendStatus(204);
};

exports.patch = async (req, res) => {
  const { id, ...updates } = req.body;
  await Data.update(id, updates);
  res.sendStatus(204);
};

exports.delete = async (req, res) => {
  const { id } = req.body;
  await Data.purge(id);
  res.sendStatus(204);
};
