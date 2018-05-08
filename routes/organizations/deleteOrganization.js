const {
  deleteOrganization,
} = require('../../models/organizations/organizationsAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');

module.exports = router => {
  router
    .route('/:id')
    .delete(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        deleteOrganization(req.params.id)
          .then(() => {
            res.json({
              message: 'Организация была удалена',
            });
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
