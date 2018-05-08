const { fullTextSearch } = require('../../models/libraryItems/libraryItemAPI');
const isValidSearchQuery = require('../../utils//validation/isValidSearchQuery');

module.exports = router => {
  router.route('/search').get((req, res) => {
    const types = JSON.parse(req.query.types);
    const { textSearch } = req.query;
    if (!isValidSearchQuery({ textSearch, types })) {
      return res.status(400).json({
        message: 'Проверьте правильность введенных данных',
      });
    }
    fullTextSearch({ textSearch, types })
      .then(items => {
        res.json(items);
      })
      .catch(() => {
        res.status(500).json({
          message: 'Запрос не может быть выполнен. Повторите попытку позже',
        });
      });
  });
  return router;
};
