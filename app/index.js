const express = require('express');
const app     = express();
const { createDocument, readDocument, updateDocument, deleteDocument } = require('../data');
const Config  = require('@zero65/config');
app.use(express.json());


// Create a document
app.post('/create', async (req, res) => {
  try {
    const { collection, data } = req.body;
    const docId = await createDocument(collection, data);
    res.status(201).json({ message: 'Document created successfully', docId });
  } catch (error) {
    console.error(error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

// Read a document
app.get('/read/:collection/:docId', async (req, res) => {
  try {
    const { collection, docId } = req.params;
    await readDocument(collection, docId);
    res.status(200).send('Read operation successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Update a field in a document
app.put('/update/:collection/:docId', async (req, res) => {
  try {
    const { collection, docId } = req.params;
    const newData = req.body; 
    await updateDocument(collection, docId, newData);
    res.status(200).json({ message: 'Document updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a document
app.delete('/delete/:collection/:docId', async (req, res) => {
  try {
    const { collection, docId } = req.params;
    await deleteDocument(collection, docId);
    res.status(200).json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = app;
