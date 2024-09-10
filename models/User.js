const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    dateOfBirth: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
