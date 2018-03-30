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
        updateLibraryItem(req.params._id, req.body).then(() => {
          res.json({
            message: 'Library item was updated successfully!',
          });
        });
      },
    );
  return router;
};
