const express = require('express');
const app     = express();

const config = require('./config');



app.get('/', async (req, res) => {
  res.send(config.message);
});

app.get('/_env', async (req, res) => {
  res.send(process.env);
});



app.listen(process.env.PORT || 8080, console.log(`index: Server is up and listening at ${ process.env.PORT || 8080 } port.`));
