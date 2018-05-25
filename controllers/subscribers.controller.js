const mongoose = require('../utils/db.utils');
const error = require('../utils/error');
const subscribersModel = require('../schemas/subscribers.schema');

module.exports = {
    async getSubscribers(req, res) {
        let subscribersList = await subscribersModel.find();
        res.status(200).json({
            subscribers: subscribersList
        });
    },
    async subscribe(req, res) {
        let id = req.params.id;
        let subscriber = await subscribersModel.findById(id)
        subscriber.toggleSubscribe()
        subscriber.save()
        res.status(200).json({
            subscriber: subscriber 
        });
    }
}