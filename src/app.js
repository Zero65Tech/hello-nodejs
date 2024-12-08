const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', require('./routes'));
app.use('/entity', require('./routes/entity'));

module.exports = app;
