const { fullTextSearch } = require('../../models/libraryItems/libraryItemAPI');

module.exports = router => {
  router.route('/library/search').get((req, res) => {
    fullTextSearch(req.query).then(items => {
      res.json(items);
    });
  });
  return router;
};
