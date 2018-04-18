const {
  deleteOrganization,
} = require('../../models/organizations/organizationsAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');

module.exports = router => {
  router.route('/:_id').delete(
    passport.authenticate('jwt-auth', { session: false }),
    isAdmin,
    (req, res) => {
      deleteOrganization(req.params._id)
        .then(() => {
          res.json({
            message: 'Организация была удалена',
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
