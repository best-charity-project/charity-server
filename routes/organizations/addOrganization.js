const {
  addOrganization,
} = require('../../models/organizations/organizationsAPI');
// const passport = require('passport');

module.exports = router => {
  router.route('/').post((req, res) => {
    addOrganization(req.body)
      .then(() => {
        res.json({
          message: 'Организация была добавлена',
        });
      })
      .catch(err => {
        res.status(400).json({
          message: 'Запрос не может быть выполнен. Повторите попытку позже',
        });
      });
  });
  return router;
};
