const mongoose = require('../utils/db.utils');
const crypto = require('crypto');
const config = require('../config');


const Events = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    date:{
        type: String
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Events', Events);