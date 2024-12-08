const express = require('express');
const controller = require('../controllers/index');

const router = express.Router();

router.get('/', controller.getMsg);
router.get('/env', controller.getEnv);

module.exports = router;
