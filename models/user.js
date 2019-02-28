var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
    legislator: String,
    bio: {},
    finSumm: {},
    topTenInd: {},
    votes: []
}, {
    timestamps: true
})

var userSchema = new mongoose.Schema ({
    name: String,
    email: String,
    cards: [cardSchema],
    googleId: String
})

module.exports = mongoose.model('User', userSchema);