const Firestore = require('@zero65tech/firestore');



async function get(id) {

  const doc = await Firestore.HELLO_DOCUMENTS.doc(id).get();

  return doc.exists ? { id: doc.id, ...doc.data() } : null;

}

async function list() {

  const snap = await Firestore.HELLO_DOCUMENTS.get();

  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

}

async function add(data) {

  data.timestamp = {
    create: new Date(),
    update: new Date()
  };

  const ref = await Firestore.HELLO_DOCUMENTS.add(data);

  return { id: ref.id, ...data };

}

async function update(id, updates) {

  updates[ 'timestamp.update' ] = new Date();
  
  await Firestore.HELLO_DOCUMENTS.doc(id).update(updates);

}

async function purge(id) {

  await Firestore.HELLO_DOCUMENTS.doc(id).delete();

}



module.exports = { get, list, add, update, purge };
