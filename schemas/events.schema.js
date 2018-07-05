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
        type:String,
        required: true
    },
    dateStart:{
        type: String,
        required: true,
    },
    dateEnd:{
        type: String,
        required: true,
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
    text:{
      type:String,
      require:true  
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Events', Events);