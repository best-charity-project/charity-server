const {
  getLocations,
} = require('../../models/education/locations/locationsAPI');

module.exports = router => {
  router.route('/').get((req, res) => {
    getLocations().then(locations => {
      res.json(locations);
    });
  });
  return router;
};
