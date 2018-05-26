const mongoose = require('../utils/db.utils');
const error = require('../utils/error');
const SubscribeModel = require('../schemas/users.subscribe.schema');
const pick = require('lodash/pick');

module.exports = {
    async newSubscription(req, res) {
        let subscrObject = req.body;
        SubscribeModel.create(subscrObject)
            .then((a) => {
                res.send(a);
            })
    }
};