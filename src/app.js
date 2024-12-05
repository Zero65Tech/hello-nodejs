const express = require('express');
const app     = express();
const cors = require('cors');

const Data = require('../data');



app.use(express.json());
app.use(cors());



app.get('/', async (req, res) => {

  res.send('Hello NodeJs !');

});

app.get('/_env', async (req, res) => {

  res.send(process.env);
  
});

app.get('/list', async (req, res) => {

  const list = await Data.list();

  res.send(list);

});

app.post('/', async (req, res) => {

  let data = req.body;

  data = await Data.add(data);

  res.send(data);

});

app.put('/', async (req, res) => {

  const { id, ...updates } = req.body;

  await Data.update(id, updates);

  res.sendStatus(204);

});

app.patch('/', async (req, res) => {

  const { id, ...updates } = req.body;

  await Data.update(id, updates);

  res.sendStatus(204);

});

app.delete('/', async (req, res) => {

  const { id } = req.body;

  await Data.purge(id);

  res.sendStatus(204);

});



module.exports = app;
