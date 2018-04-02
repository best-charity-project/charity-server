const { filterRoutes } = require('../../models/education/educationAPI');

module.exports = router => {
  router.route('/filter').get((req, res) => {
    filterRoutes(req.query).then(items => {
      res.json(items);
    });
  });
  return router;
};
