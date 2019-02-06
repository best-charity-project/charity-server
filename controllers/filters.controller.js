const FilterModel = require('../schemas/filters.schema');

module.exports = {
    async newFilter(req, res, next) {
        let filter = await new FilterModel(req.body);
        FilterModel.create(filter, (err, result) => {
            if (err) return next(err);
            res.send(result);
        });
    },
    async getFilters(req, res, next) {
        try {
            let type = req.query.type;
            let filterList = (type) ? await FilterModel.find({
                type: type
            }) : await FilterModel.find();

            res.status(200).json({
                filterList: filterList
            });
        } catch (err) {
            next(err)
        }
    },
    async deleteFilterById(req, res, next) {
        let id = req.params.id;
        await FilterModel.findByIdAndRemove(id, (err, result) => {
            if (err) return next(err);
            res.status(200).json({
                filter: result
            });
        });
    }

}