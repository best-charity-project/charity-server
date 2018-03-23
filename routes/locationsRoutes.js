const {
  getLocations,
} = require('../models/education/locations/locationsAPI');

const locationsRoutes = router => {
  router
    .route('/locations')
    .get((req, res) => {
      getLocations().then(locations => {
        res.json(locations);
      });
    })
  return router;
};

module.exports = locationsRoutes;