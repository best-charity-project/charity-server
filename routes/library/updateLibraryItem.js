const {
  updateLibraryItem,
} = require('../../models/libraryItems/libraryItemAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');

module.exports = router => {
  router
    .route('/edit/:_id')
    .put(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        updateLibraryItem(req.params._id, req.body)
          .then(() => {
            res.json({
              message: 'Документ был отредактирован',
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
