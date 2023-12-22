const express = require('express');
const app     = express();

const Data = require('../data');



app.use(express.json());



app.get('/list', async(req, res) => {

  const list = await Data.list();

  res.send(list);

});

app.post('/add', async(req, res) => {

  let data = req.body;

  data = await Data.add(data);

  res.send(data);

});

app.post('/update', async(req, res) => {

  const { id, ...updates } = req.body;

  await Data.update(id, updates);

  res.send('Document updated successfully !');

});

app.post('/delete', async(req, res) => {

  const { id } = req.body;

  await Data.delete(id);

  res.send('Document deleted successfully !');

});



module.exports = app;
