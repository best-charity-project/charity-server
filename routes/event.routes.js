const express = require('express');
const router = express.Router();
const Events = require('../schemas/events.schema');
const controller = require('../controllers/event.controller')
// router.get('/', function (req, res, next) {
//     let eventList =Events.find();
    
    
// });

// router.post('/', function (req, res, next) {
//     console.log(req.body);
//     var a = req.body
//         let event = new Events(a);
//         console.log(event)
//         Events.create(event).then(function(createdCat){
//             res.send(createdCat)
//         })
    
 
 
//     });

    router.post('/', controller.newEvent)

module.exports = router;