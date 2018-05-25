const mongoose = require('../utils/db.utils');
const error = require('../utils/error')
const SubscribeModel = require('../schemas/users.subscribe.schema');
const pick = require('lodash/pick');

module.exports = {
    async newSubscription(req, res) {
        console.log(req.body);
        SubscribeModel.create(req.body)
            .then((a) => {
                res.send(a);
            })
    } 
}