const {
  getOrganizations,
} = require('../../models/organizations/organizationsAPI');

module.exports = router => {
  router.route('/').get((req, res) => {
    getOrganizations()
      .then(items => {
        res.json(items);
      })
      .catch(() => {
        res.status(500).json({
          message: 'Запрос не может быть выполнен. Повторите попытку позже',
        });
      });
  });
  return router;
};
