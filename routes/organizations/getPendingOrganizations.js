const {
  getPendingOrganizations,
} = require('../../models/organizations/organizationsAPI');

module.exports = router => {
  router.route('/pending').get((req, res) => {
    getPendingOrganizations(req.query)
      .then(items => {
        res.json(items);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
  });
  return router;
};
