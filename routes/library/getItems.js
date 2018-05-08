const { getItems } = require('../../models/libraryItems/libraryItemAPI');
const isValidLibraryQuery = require('../../utils//validation/isValidLibraryQuery');

module.exports = router => {
  router.route('/').get((req, res) => {
    const { categoryTag, type } = req.query;
    if (!isValidLibraryQuery({ categoryTag, type })) {
      return res.status(400).json({
        message: 'Проверьте правильность введенных данных',
      });
    }
    getItems({ categoryTag, type })
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
