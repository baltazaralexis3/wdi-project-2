var express = require('express');
var router = express.Router();
var cardsCtrl = require('../controllers/cards');

router.get('/', cardsCtrl.index);
router.get('/new', cardsCtrl.new);
router.get('/:id', cardsCtrl.show);
router.post('/', cardsCtrl.create);

module.exports = router;