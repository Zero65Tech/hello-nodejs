const firestore = require('@google-cloud/firestore');

const Config = require('../config/firestore');
const Firestore = new firestore.Firestore({ projectId: Config.projectId });
const Collection = Firestore.collection(Config.collection);

const entityModel = require('../models/entity');

exports.read = async (id) => {
    const doc = await Collection.doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
}

exports.readAll = async () => {
    const snap = await Collection.get();
    return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

exports.create = async (data) => {
    await entityModel.validateAsync(data);
    const ref = await Collection.add(data);
    return ref.id;
}

exports.set = async (id, data) => {
    await entityModel.validateAsync(data);
    await Collection.doc(id).update(data);
}

exports.update = async (id, data) => {
    await entityModel.validateAsync(data);
    await Collection.doc(id).update(data);
}

exports.delete = async (id) => {
    await Collection.doc(id).delete();
}
