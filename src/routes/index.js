const express = require('express');
const rootController = require('../controllers/index');

const router = express.Router();

router.get('/', rootController.getMsg);
router.get('/env', rootController.getEnv);

module.exports = router;
