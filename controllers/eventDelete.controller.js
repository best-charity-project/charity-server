const mongoose = require('../utils/db.utils');
const error = require('../utils/error')
const EventsModel = require('../schemas/events.schema')
const pick = require('lodash/pick');

module.exports = {
    async deleteEvent(req, res) {
        let eventDelete = await EventsModel.findByIdAndRemove(req.body);
        }
    }

