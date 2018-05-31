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
         },
         async getEvent(req, res) {
            let id = req.params.id;
            let event = await EventsModel.findById(id);
            res.send(event)
         },
         async UpdateEvent(req, res) {
            EventsModel.findByIdAndUpdate(req.params.id, req.body, {new: true},(err,event)=>{
                if (err) return res.status(500).send(err);
             return res.send(event);
            })
            // let id = req.params.id;
            // let event = await EventsModel.findById(id);
            // res.send(event)
         }

    }


    