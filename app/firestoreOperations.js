const { Firestore } = require('@google-cloud/firestore');

// Initialize Firestore with the service account key
const firestore = new Firestore({
  projectId: 'zero65-test',
  keyFilename: './keyfile3.json',
});

// CRUD Operations

// Create a document
async function createDocument(collection, data) {
  const docRef = await firestore.collection(collection).add(data);
  console.log(`Document created with ID: ${docRef.id}`);
  return docRef.id;
}

// Read a document
async function readDocument(collection, docId) {
  const docRef = firestore.collection(collection).doc(docId);
  const doc = await docRef.get();

  if (!doc.exists) {
    console.log('No such document!');
  } else {
    console.log('Document data:', doc.data());
  }
}

// Update a document
async function updateDocument(collection, docId, newData) {
  const docRef = firestore.collection(collection).doc(docId);
  await docRef.update(newData);
  console.log('Document updated successfully!');
}

// Delete a document
async function deleteDocument(collection, docId) {
  const docRef = firestore.collection(collection).doc(docId);
  await docRef.delete();
  console.log('Document deleted successfully!');
}

module.exports = {
  createDocument,
  readDocument,
  updateDocument,
  deleteDocument,
};
