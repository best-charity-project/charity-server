const {
  addOrganization,
} = require('../../models/organizations/organizationsAPI');
const passport = require('passport');

module.exports = router => {
  router
    .route('/')
    .post(passport.authenticate('jwt-auth', { session: false }), (req, res) => {
      addOrganization(req.body)
        .then(() => {
          res.json({
            message: 'Организация была добавлена',
          });
        })
        .catch(() => {
          res.status(500).json({
            message: 'Запрос не может быть выполнен. Повторите попытку позже',
          });
        });
    });
  return router;
};
