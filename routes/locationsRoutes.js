const {
  getLocations,
} = require('../models/education/locations/locationsAPi');
const locationsRoutes = router => {
  router
    .route('/locations')
    .get((req, res) => {
      getLocations().then(Locations => {
        res.json(Locations);
      });
    })
  return router;
};

module.exports = locationsRoutes;