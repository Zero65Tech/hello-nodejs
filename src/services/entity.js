const entityRepository = require('../repositories/entity');

exports.list = async () => {
  return await entityRepository.getAll();
}

exports.add = async (data) => {
  data.timestamp = {
    create: new Date(),
    update: new Date()
  };
  return entityRepository.create(data);
}

exports.update = async (id, updates) => {
  updates[ 'timestamp.update' ] = new Date();
  await entityRepository.update(id, updates);
}

exports.delete = async (id) => {
  await entityRepository.delete(id);
}
