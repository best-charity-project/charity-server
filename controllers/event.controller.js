const mongoose = require('../utils/db.utils');
const error = require('../utils/error')
const EventsModel = require('../schemas/events.schema')

module.exports = {
        async newEvent(req, res) {
            let a = req.body;
            let event = new EventsModel(a);
            EventsModel.create(event).then(function(createEvent){
                res.send(createEvent)
            })

        },
        async deleteEvent(req, res) {
            let eventDelete = await EventsModel.findByIdAndRemove(req.body);
            },
        async getEvents(req, res) {
            let eventsList = await EventsModel.find();
            res.status(200).json({
                events:eventsList
             });    
         }
    }


    