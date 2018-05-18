const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
    password: {
        type: String,
        required: true,
        trim: true,
        select: false,
    },
    passwordSalt: {
        type: String,
        required: true,
        select: false,
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
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);