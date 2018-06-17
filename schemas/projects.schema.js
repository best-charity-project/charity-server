const mongoose = require('../utils/db.utils');
const crypto = require('crypto');
const config = require('../config');


const Projects = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    date:{
        type: String,
        required: true,
    },
    shortText: {
        type: String,
        trim: true,
    },
    fullText: {
        type: String,
        required: true,
        trim: true,
    },
    isPublic: {
        type: Boolean,
        default: false,
    },
    image:{
        type: String
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Projects', Projects);