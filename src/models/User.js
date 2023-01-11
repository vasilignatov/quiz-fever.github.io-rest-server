const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../constants');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', next => {
    bcrypt.hash(this.pasword, SALT_ROUNDS)
        .then(hash => {
            this.password = hash;
            next();
        });
});



module.exports = mongoose.model('User', userSchema);