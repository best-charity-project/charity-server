const mongoose = require('../utils/db.utils');
const config = require('../config');

const subscribersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    isSubscribed: {
        type: Boolean,
        required: true,
        default: true,
    }
})

subscribersSchema.methods.toggleSubscribe = function() {
    this.isSubscribed = !this.isSubscribed;
}

module.exports = mongoose.model('Subscriber', subscribersSchema);