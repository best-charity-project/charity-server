const {
  getOrganizations,
} = require('../../models/organizations/organizationsAPI');

module.exports = router => {
  router.route('/').get((req, res) => {
    getOrganizations(req.query)
      .then(items => {
        res.json(items);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
  });
  return router;
};
