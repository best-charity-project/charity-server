// const mongoose = require('../utils/db.utils');
// const error = require('../utils/error');



// router.post('/', function (req, res, next) {
//     console.log(req.body);
//     var a = req.body
//         let event = new Events(a);
//         console.log(event)
//         Events.create(event).then(function(createdCat){
//             res.send(createdCat)
//         })
    
 
 
//     });


const mongoose = require('../utils/db.utils');
const error = require('../utils/error')
const Events = require('../schemas/events.schema')
const pick = require('lodash/pick');

module.exports = {
    async newEvent(req, res) {
        console.log(req.body);

        var a = req.body
                let event = new Events(a);
                console.log(event)
                Events.create(event).then(function(createdCat){
                    res.send(createdCat)
                })

        }
    }


    