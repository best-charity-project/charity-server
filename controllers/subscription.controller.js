const SubscribeModel = require('../schemas/subscription.schema');

module.exports = {
    async newSubscription(req, res, next) {
        let subscrObject = req.body;
        SubscribeModel.create(subscrObject, (err, result) => {
            if (err) return next(err);
            res.send(result);
        });
    },
    async getSubscribers(req, res, next) {
        await SubscribeModel.find((err, subscribersList) => {
            if (err) return next(err);
            res.status(200).json({
                subscribers: subscribersList
            });
        });
    },
    async subscribe(req, res, next) {
        try {
            let id = req.params.id;
            let subscriber = await SubscribeModel.findById(id);

            subscriber.toggleSubscribe();
            subscriber.save();
            res.status(200).json({
                subscriber: subscriber
            });
        } catch (err) {
            next(err);
        }
    }
};