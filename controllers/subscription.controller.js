const mongoose = require('../utils/db.utils');
const error = require('../utils/error');
const SubscribeModel = require('../schemas/subscribtion.schema');

module.exports = {
    async newSubscription(req, res) {
        let subscrObject = req.body;
        SubscribeModel.create(subscrObject)
            .then((a) => {
                res.send(a);
            })
    },
    async getSubscribers(req, res) {
        let subscribersList = await SubscribeModel.find();
        res.status(200).json({
            subscribers: subscribersList
        });
    },
    async subscribe(req, res) {
        let id = req.params.id;
        let subscriber = await SubscribeModel.findById(id)
        subscriber.toggleSubscribe()
        subscriber.save()
        res.status(200).json({
            subscriber: subscriber 
        });
    }
};