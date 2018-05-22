const mongoose = require('../utils/db.utils');
const crypto = require('crypto');
const config = require('../config');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    passwordSalt: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    passChangeToken: {
        type: String,
        default: null,
    }
}, {
    timestamps: true,
});

userSchema
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

userSchema.methods.checkPassword = function (password) {
    if (!password) return false;
    if (!this.passwordHash) return false;

    return (
        crypto
        .pbkdf2Sync(password, this.passwordSalt, config.crypto.hash.iterations, config.crypto.hash.length, 'sha256')
        .toString('base64') == this.passwordHash
    );
};

module.exports = mongoose.model('User', userSchema);