var mongoose = require('mongoose');

var cardSchema = new mongoose.Schema ({
    text: String
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