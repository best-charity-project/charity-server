const {
  acceptPendingItem,
} = require('../../models/libraryItems/libraryItemAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');

module.exports = router => {
  router
    .route('/:_id')
    .put(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        acceptPendingItem(req.params._id)
          .then(() => {
            res.json({
              message:
                'Заявка на добавление документа была одобрена администратором',
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
