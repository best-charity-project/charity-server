const { filterRoutes } = require('../../models/education/educationAPI');

module.exports = router => {
  router.route('/filter').get((req, res) => {
    filterRoutes(req.query)
      .then(items => {
        res.json(items);
      })
      .catch(err => {
        res.status(400).json({
          message: 'Запрос не может быть обработан. Повторите попытку позже',
        });
      });
  });
  return router;
};
