const mongoose = require('../utils/db.utils');
const error = require('../utils/error')
const FilterModel = require('../schemas/filters.schema')

module.exports = {
        async newFilter(req, res) {
            let a = req.body;
            // let filter = new FilterModel(a);
            // FilterModel.create(filter).then(function(createEvent){
            //     res.send(createEvent)
            // })
            // res.send(filter)
            console.log(a.title)
            let event = await FilterModel.findOne({title:a.title})
            res.send(event.filters)

        }


    }


    