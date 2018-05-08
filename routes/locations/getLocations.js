const {
  getLocations,
} = require('../../models/education/locations/locationsAPI');

module.exports = router => {
  router.route('/').get((req, res) => {
    getLocations()
      .then(locations => {
        res.json(locations);
      })
      .catch(() => {
        res.status(500).json({
          message: 'Запрос не может быть выполнен. Повторите попытку позже',
        });
      });
  });
  return router;
};
