const { deleteItems } = require('../../models/libraryItems/libraryItemAPI');
const isValidLibraryQuery = require('../../utils/validation/isValidLibraryQuery');

module.exports = router => {
  router.route('/').delete((req, res) => {
    const { categoryTag } = req.query;
    if (!isValidLibraryQuery({ categoryTag })) {
      return res.status(400).json({
        message: 'Проверьте правильность введенных данных',
      });
    }
    deleteItems({ categoryTag })
      .then(items => {
        res.json({
          message: 'Документы были успешно удалены',
        });
      })
      .catch(() => {
        res.status(500).json({
          message: 'Запрос не может быть выполнен. Повторите попытку позже',
        });
      });
  });
  return router;
};
