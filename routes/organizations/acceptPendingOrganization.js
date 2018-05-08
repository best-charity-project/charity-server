const {
  acceptPendingOrganization,
} = require('../../models/organizations/organizationsAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');

module.exports = router => {
  router
    .route('/:id')
    .put(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
          return res.status(400).json({ message: 'Некорректный запрос' });
        }
        acceptPendingOrganization(req.params.id)
          .then(() => {
            res.json({
              message:
                'Заявка на добавление новой организации была одобрена администратором',
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
