const mongoose = require('../utils/db.utils');
const crypto = require('crypto');
const config = require('../config');

const Events = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    place : {
        type:String
    },
    dateStart:{
        type: String,
        required: true,
    },
    timeEnd:{
        type: String,
    },
    participation:{
        type:String
    },
    linkParticipation:{
        type:String
    },
    organizers: {
        type:String
    },
    speakersArray:{
        type:Array
    },
    organization:{
        type:String
    },
    contactPerson:{
        type:String
    },
    contactPhone :{
        type:String
    },
    website:{

    },
    filter: {
        type: String
    },
    text:{
      type:String,
      require:true  
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Events', Events);