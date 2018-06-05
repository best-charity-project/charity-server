const mongoose = require('../utils/db.utils');
const config = require('../config');

const userSubscribeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    isSubscribeStatus: {
        type: Boolean,
        default: true,
    },
}, 
{
    timestamps: true,
});

userSubscribeSchema.methods.toggleSubscribe = function() {
    this.isSubscribeStatus = !this.isSubscribeStatus;
}
module.exports = mongoose.model('UserSubscribe', userSubscribeSchema);