const { getPendingItems } = require('../../models/libraryItems/libraryItemAPI');

module.exports = router => {
  router.route('/pending').get((req, res) => {
    getPendingItems()
      .then(items => {
        res.json(items);
      })
      .catch(err => {
        res.status(500).json({
          message: 'Запрос не может быть выполнен. Повторите попытку позже',
        });
      });
  });
  return router;
};
