const { getItemsAmount } = require('../../models/libraryItems/libraryItemAPI');
const isValidLibraryQuery = require('../../utils//validation/isValidLibraryQuery');

module.exports = router => {
  router.route('/count').get((req, res) => {
    const { categoryTag, type } = req.query;
    const query = {};
    query.categoryTag = categoryTag;
    if (type) {
      query.type = type;
    }
    if (!isValidLibraryQuery(query)) {
      return res.status(400).json({
        message: 'Проверьте правильность введенных данных',
      });
    }
    getItemsAmount(query)
      .then(amount => {
        res.json(amount);
      })
      .catch(() => {
        res.status(500).json({
          message: 'Запрос не может быть выполнен. Повторите попытку позже',
        });
      });
  });
  return router;
};
