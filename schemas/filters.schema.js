const mongoose = require('../utils/db.utils');

const Filters = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    type : {
        type:String,
        required: true,
    }
});

module.exports = mongoose.model('Filters ', Filters );