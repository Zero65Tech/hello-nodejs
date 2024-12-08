const express = require('express');
const entityController = require('../controllers/entity');

const router = express.Router();

router.get('/list', entityController.list);
router.post('/', entityController.add);
router.patch('/', entityController.update);
router.delete('/', entityController.delete);

module.exports = router;
