const express = require('express');
const router = express.Router();

const Data = require('../../data');



router.get('/', async (req, res) => {

  res.send('Hello NodeJs !');

});

router.get('/_env', async (req, res) => {

  res.send(process.env);
  
});

router.get('/list', async (req, res) => {

  const list = await Data.list();

  res.send(list);

});

router.post('/', async (req, res) => {

  let data = req.body;

  data = await Data.add(data);

  res.send(data);

});

router.put('/', async (req, res) => {

  const { id, ...updates } = req.body;

  await Data.update(id, updates);

  res.sendStatus(204);

});

router.patch('/', async (req, res) => {

  const { id, ...updates } = req.body;

  await Data.update(id, updates);

  res.sendStatus(204);

});

router.delete('/', async (req, res) => {

  const { id } = req.body;

  await Data.purge(id);

  res.sendStatus(204);

});



module.exports = router;
