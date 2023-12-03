const express = require('express');
const app     = express();

const Config  = require('@zero65/config');



app.get('/', async (req, res) => {
  res.send(Config.message);
});

app.get('/_env', async (req, res) => {
  res.send(process.env);
});



module.exports = app;
