const mongoose = require('../utils/db.utils');
const crypto = require('crypto');
const config = require('../config');

const Projects = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    organization:{
        type: String,
        trim: true
    },
    headArray:[{
        type: String,
        trim: true,
    }],
    contactsArray:[{
        type: String,
        trim: true,
    }],
    address:{
        type: String,
        trim: true,
    },
    site:{
        type: String,
        trim: true,
    },
    mediaImageArray:[{
        type: String
    }],
    mediaVideoArray:[{
        type: String
    }],
    fullText: {
        type: String,
        trim: true,
    },
    isPublic: {
        type: Boolean,
        default: false,
    },
    filter: {
        type: String,
        trim: true,
    },
    image:{
        type: String
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Projects', Projects);