const { Firestore } = require('@zero65tech/google-cloud-platform');



async function get(id) {
  let doc = await Firestore.HELLO_DOCUMENTS.doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
}

async function list() {
  let snap = await Firestore.HELLO_DOCUMENTS.get();
  return snap.docs.map(doc => { return { id: doc.id, ...doc.data() } });
}

async function add(data) {
  let ref = await Firestore.HELLO_DOCUMENTS.add(data);
  return { id: ref.id, ...data };
}

async function update(id, data) {
  await Firestore.HELLO_DOCUMENTS.doc(id).update(data);
}

async function purge(id) {
  await Firestore.HELLO_DOCUMENTS.doc(id).delete();
}



module.exports = { get, list, add, update, purge };
