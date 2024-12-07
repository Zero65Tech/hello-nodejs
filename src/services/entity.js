const Firestore = require('@zero65tech/firestore');



exports.get = async (id) => {
  const doc = await Firestore.HELLO_DOCUMENTS.doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
}

exports.list = async () => {
  const snap = await Firestore.HELLO_DOCUMENTS.get();
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
