const { fullTextSearch } = require('../../models/libraryItems/libraryItemAPI');

module.exports = router => {
  router.route('/search').get((req, res) => {
    fullTextSearch(req.query).then(items => {
      res.json(items);
    });
  });
  return router;
};
