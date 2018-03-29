const getLocations = require('./getLocations');

const locationsRoutes = router => {
  router = getLocations(router);
  return router;
};

module.exports = locationsRoutes;
