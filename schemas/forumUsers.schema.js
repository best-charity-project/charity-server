const mongoose = require('mongoose');
const crypto = require('crypto');
const config = require('../config');

const forumUsersSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
    },
    avatar: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    isAdmin: { 
        type: Boolean, 
        default: false,
    },
    passwordSalt: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
});

forumUsersSchema
    .virtual('password')
    .set(function (password) {
        if (password !== undefined) {
            if (password.length < 4) {
                this.invalidare('password', 'The password must be at least 4 characters.');
            }
        }
        this._plainPassword = password;
        if (password) {
            this.passwordSalt = crypto.randomBytes(config.crypto.hash.length).toString('base64');
            this.passwordHash = crypto
                .pbkdf2Sync(password, this.passwordSalt, config.crypto.hash.iterations, config.crypto.hash.length, 'sha256')
                .toString('base64');
        } else {
            this.passwordSalt = undefined;
            this.passwordHash = undefined;
        }
    })
    .get(function () {
        return this._plainPassword;
    });

forumUsersSchema.methods.checkPassword = function (password) {
    if (!password) return false;
    if (!this.passwordHash) return false;

    return (
        crypto
        .pbkdf2Sync(password, this.passwordSalt, config.crypto.hash.iterations, config.crypto.hash.length, 'sha256')
        .toString('base64') == this.passwordHash
    );
};

module.exports = mongoose.model('forumUsers', forumUsersSchema);