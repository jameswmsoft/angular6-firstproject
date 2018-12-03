var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    isbn: String,
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
