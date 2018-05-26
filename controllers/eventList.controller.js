const mongoose = require('../utils/db.utils');
const error = require('../utils/error')
const EventsModel = require('../schemas/events.schema')
const pick = require('lodash/pick');

module.exports = {
    async listEvent(req, res) {
        let eventsList = await EventsModel.find();
        res.status(200).json({
            events:eventsList
        });

       

        }
    }

