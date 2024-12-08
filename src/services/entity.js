const entityModel = require('../models/entity');

exports.list = async () => {
  let entities = await entityModel.readAll();
  return entities;
}

exports.add = async (data) => {
  data.timestamp = {
    create: new Date(),
    update: new Date()
  };
  const ref = await Firestore.HELLO_DOCUMENTS.add(data);
  return { id: ref.id, ...data };
}

exports.update = async (id, updates) => {
  updates[ 'timestamp.update' ] = new Date();
  await Firestore.HELLO_DOCUMENTS.doc(id).update(updates);
}

exports.purge = async (id) => {
  await Firestore.HELLO_DOCUMENTS.doc(id).delete();
}
