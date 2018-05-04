const {
  acceptPendingItem,
} = require('../../models/libraryItems/libraryItemAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');
const isValidObjectId = require('../../models/utils/isValidObjectId');

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
        acceptPendingItem(id)
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
