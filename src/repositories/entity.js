const firestore = require('@google-cloud/firestore');
const entityModel = require('../models/entity');

const Firestore = new firestore.Firestore({ projectId: 'zero65-test' });
const Collection = Firestore.collection('HELLO_DOCUMENTS');


exports.create = async (data) => {
    await entityModel.validateAsync(data);
    const docRef = await Collection.add(data);
    return docRef.id;
}

exports.read = async (id) => {
    const doc = await Collection.doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
}

exports.readAll = async () => {
    const snap = await Collection.get();
    return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

exports.update = async (id, data) => {
    await entityModel.validateAsync(data);
    await Collection.doc(id).update(data);
}

exports.delete = async (id) => {
    await Collection.doc(id).delete();
}
