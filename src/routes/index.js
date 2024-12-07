const express = require('express');
const indexController = require('../controllers/index');
const entityRouter = require('./entity');

const router = express.Router();

router.get('/', indexController.getMsg);
router.get('/env', indexController.getEnv);
router.get('/entity', entityRouter);

module.exports = router;
