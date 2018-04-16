const {
  acceptPendingOrganization,
} = require('../../models/organizations/organizationsAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');

module.exports = router => {
  router.route('/:_id').put(
    passport.authenticate('jwt-auth', { session: false }),
    isAdmin,
    (req, res) => {
      acceptPendingOrganization(req.params._id)
        .then(() => {
          res.json({
            message:
              'Заявка на добавление новой организации была одобрена администратором',
          });
        })
        .catch(err => {
          res.status(400).json({
            message: 'Запрос не может быть выполнен. Повторите попытку позже',
          });
        });
    },
  );
  return router;
};
