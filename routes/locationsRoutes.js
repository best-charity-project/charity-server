const {
  getLocations,
} = require('../models/education/locations/locationsAPi');

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