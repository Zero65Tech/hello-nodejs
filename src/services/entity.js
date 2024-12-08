const entityRepository = require('../repositories/entity');

exports.list = async () => {
  return await entityRepository.readAll();
}

exports.add = async (data) => {
  data.timestamp = {
    create: new Date(),
    update: new Date()
  };
  return entityRepository.create(data);
}

exports.set = async (id, updates) => {
  updates[ 'timestamp.update' ] = new Date();
  await entityRepository.set(id, updates);
}

exports.update = async (id, updates) => {
  updates[ 'timestamp.update' ] = new Date();
  await entityRepository.set(id, updates);
}

exports.delete = async (id) => {
  await entityRepository.delete(id);
}
