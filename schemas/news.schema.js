const mongoose = require('../utils/db.utils');

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
    filter: {
        type: String,
        trim: true,
    },
    isPublic: {
        type: Boolean,
        default: false,
    },
    idVK: {
        type:String
    }
}, 
{
    timestamps: true,
});

module.exports = mongoose.model('News', newsSchema);