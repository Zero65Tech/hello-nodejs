const entityService = require('../services/entity');

exports.list = async (req, res) => {
  const list = await entityService.list();
  res.send(list);
};

exports.add = async (req, res) => {
  const data = req.body;
  const id = await entityService.add(data);
  res.send({ id });
};

exports.update = async (req, res) => {
  const { id, ...updates } = req.body;
  await entityService.update(id, updates);
  res.sendStatus(204);
};

exports.delete = async (req, res) => {
  const { id } = req.body;
  await entityService.delete(id);
  res.sendStatus(204);
};
