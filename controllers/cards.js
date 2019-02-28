var Card = require('../models/card');

module.exports = {
    index, 
    show, 
    new: newCard,
    create
};

function index(req, res) {

}

function show(req, res) {

}

function newCard(req, res) {
    res.render('cards/new', { title: 'Add a Legislator Card'})
}

function create(req, res) {
    var card = new Card(req.body)
}


