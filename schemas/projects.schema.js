const mongoose = require('../utils/db.utils');
const crypto = require('crypto');
const config = require('../config');


const Projects = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    organization:{
        type: String,
        trim: true
    },
    head:{
        type: String,
        trim: true,
    },
    contacts:{
        type: String,
        trim: true,
        required: true,
    },
    address:{
        type: String,
        trim: true,
    },
    site:{
        type: String,
        trim: true,
    },
    media:[
        [
            {
                img:{
                    type:String,
                    trim:true
                }
            },
        ],
        [
            {
                video:{
                    type: String,
                    trim: true,
                }
            }
        ]
    ],
    fullText: {
        type: String,
        required: true,
        trim: true,
    },
    isPublic: {
        type: Boolean,
        default: false,
    },
    source: {
        type: String,
        required: true,
        trim: true,
    },
    image:{
        type: String
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Projects', Projects);