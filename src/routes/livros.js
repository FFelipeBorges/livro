const express = require('express');
const livrosController = require('../controllers/livrosController');
const router = express.Router();

router.get('/', livrosController.index);
router.put('/:idLivro', livrosController.update);
router.post('/', livrosController.create);

module.exports = router;
