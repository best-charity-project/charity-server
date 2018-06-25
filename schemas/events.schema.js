const mongoose = require('../utils/db.utils');
const crypto = require('crypto');
const config = require('../config');


const Events = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    dateStart:{
        type: String,
        required: true,
    },
    dateEnd:{
        type: String,
        required: true,
    },
    text:{
      type:String,
      require:true  
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Events', Events);