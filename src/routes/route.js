const express = require('express');
const app = express();

const config = require('@zero65tech/config');

app.get('/', async (req, res) => {
    res.status(200).send(config.message);
});

app.get('/_env', async (req, res) => {
    res.send(process.env);
});

module.exports = {app}
