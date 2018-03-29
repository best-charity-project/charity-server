const { getPendingItems } = require('../../models/libraryItems/libraryItemAPI');

module.exports = router => {
  router.route('/pending').get((req, res) => {
    getPendingItems(req.query)
      .then(items => {
        res.json(items);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
  });
  return router;
};
