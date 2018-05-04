const {
  updateLibraryItem,
} = require('../../models/libraryItems/libraryItemAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');
const isValidObjectId = require('../../models/utils/isValidObjectId');

module.exports = router => {
  router
    .route('/edit/:id')
    .put(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        const { id } = req.params;
        const data = req.body;
        if (!isValidObjectId(id)) {
          return res.status(400).json({ message: 'Некорректный запрос' });
        }
        updateLibraryItem(id, data)
          .then(() => {
            res.json({
              message: 'Документ был успешно отредактирован',
            });
          })
          .catch(err => {
            res.status(500).json({
              message: 'Запрос не может быть выполнен. Повторите попытку позже',
            });
          });
      },
    );
  return router;
};
