const entityService = require('../services/entity');



exports.list = async (req, res) => {
  const list = await entityService.list();
  res.send(list);
};

exports.post = async (req, res) => {
  let data = req.body;
  data = await entityService.add(data);
  res.send(data);
};

exports.put = async (req, res) => {
  const { id, ...updates } = req.body;
  await entityService.update(id, updates);
  res.sendStatus(204);
};

exports.patch = async (req, res) => {
  const { id, ...updates } = req.body;
  await entityService.update(id, updates);
  res.sendStatus(204);
};

exports.delete = async (req, res) => {
  const { id } = req.body;
  await entityService.purge(id);
  res.sendStatus(204);
};
