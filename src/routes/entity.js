const express = require('express');
const controller = require('../controllers/entity');

const router = express.Router();

router.get('/list', controller.list);
router.post('/', controller.post);
router.put('/', controller.put);
router.patch('/', controller.patch);
router.delete('/', controller.delete);

module.exports = router;
