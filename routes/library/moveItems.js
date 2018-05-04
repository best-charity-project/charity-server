const { moveItems } = require('../../models/libraryItems/libraryItemAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');
const isValidLibraryQuery = require('../../models/utils/isValidLibraryQuery');

module.exports = router => {
  router
    .route('/move')
    .put(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        const { from, to } = req.body;
        if (!isValidLibraryQuery({ from, to })) {
          return res.status(400).json({
            message: 'Проверьте правильность введенных данных',
          });
        }
        moveItems(from, to)
          .then(() => {
            res.json({
              message: 'Документы были успешно перемещены',
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
