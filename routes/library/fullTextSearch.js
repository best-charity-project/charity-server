const { fullTextSearch } = require('../../models/libraryItems/libraryItemAPI');
const isValidSearchQuery = require('../../models/utils/isValidSearchQuery');

module.exports = router => {
  router.route('/search').get((req, res) => {
    const types = JSON.parse(req.query.types);
    const { textSearch } = req.query;
    if (!isValidSearchQuery({ textSearch, types })) {
      return res.status(400).json({
        message: 'Проверьте правильность введенных данных',
      });
    }
    fullTextSearch({ textSearch, types }).then(items => {
      res.json(items);
    });
  });
  return router;
};
