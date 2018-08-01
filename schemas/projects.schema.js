const mongoose = require('../utils/db.utils');
const crypto = require('crypto');
const config = require('../config');

const HeadSchema = new mongoose.Schema({name:String})
const ContactSchema = new mongoose.Schema({name:String})
const MediaImageSchema = new mongoose.Schema({name:String})
const MediaVideoSchema = new mongoose.Schema({name:String})

const Projects = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    organization:{
        type: String,
        trim: true
    },
    headArray:[HeadSchema],
    contactsArray:[ContactSchema],
    address:{
        type: String,
        trim: true,
    },
    site:{
        type: String,
        trim: true,
    },
    mediaImageArray:[MediaImageSchema],
    mediaVideoArray:[MediaVideoSchema],
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