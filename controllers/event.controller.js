const mongoose = require('../utils/db.utils');
const error = require('../utils/error')
const Events = require('../schemas/events.schema')
const pick = require('lodash/pick');

module.exports = {
    async newEvent(req, res) {
        var a = req.body
                let event = new Events(a);
                Events.create(event).then(function(createEvent){
                    res.send(createEvent)
                })

        }
    }


    