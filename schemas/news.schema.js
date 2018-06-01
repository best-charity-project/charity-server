const mongoose = require('../utils/db.utils');
const config = require('../config');

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
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
    source: {
        type: String,
        required: true,
        trim: true,
    },
    isPublic: {
        type: Boolean,
        default: false,
    },
}, 
{
    timestamps: true,
});

module.exports = mongoose.model('News', newsSchema);