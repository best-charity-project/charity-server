const mongoose = require('../utils/db.utils');
const error = require('../utils/error')
const FilterModel = require('../schemas/filters.schema')

module.exports = {
        async newFilter(req, res) {
            let a = req.body;
            let filter = await new FilterModel(a);
            FilterModel.create(filter).then(function(filter){
                res.send(filter)
            })

        },
        async getFilters(req, res) {
            filterList = await FilterModel.find();
            res.status(200).json({
                filterList :filterList
             });
         },
         async deleteFilterById(req, res) {
            let id = req.params.id;
            FilterModel.findByIdAndRemove(id)
                .then((result) => {
                    console.log(result + ' res')
                    res.status(200).json({
                        filter: result
                    });
                });
        }

    }


    