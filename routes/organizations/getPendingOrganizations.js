const {
  getPendingOrganizations,
} = require('../../models/organizations/organizationsAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');

module.exports = router => {
  router
    .route('/pending')
    .get(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        getPendingOrganizations()
          .then(items => {
            res.json(items);
          })
          .catch(() => {
            res.status(500).json({
              message: 'Запрос не может быть выполнен. Повторите попытку позже',
            });
          });
      },
    );
  return router;
};
