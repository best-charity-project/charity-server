const mongoose = require('../utils/db.utils');

const Materials = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    source: {
        type: String
    },
    fileId: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String,
        trim: true
    },
    author: {
        type: String,
        trim: true
    },
    filter: {
        type: String,
        trim: true,
        lowercase: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Materials', Materials);
