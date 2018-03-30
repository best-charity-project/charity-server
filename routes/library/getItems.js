const { getItems } = require('../../models/libraryItems/libraryItemAPI');

module.exports = router => {
  router.route('/').get((req, res) => {
    getItems(req.query)
      .then(items => {
        res.json(items);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
  });
  return router;
};
