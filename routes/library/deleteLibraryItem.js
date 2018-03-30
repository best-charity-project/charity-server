const {
  deleteLibraryItem,
} = require('../../models/libraryItems/libraryItemAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');

module.exports = router => {
  router
    .route('/:_id')
    .delete(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        deleteLibraryItem(req.params._id).then(() => {
          res.json({
            message: 'Library item was deleted by admin!',
          });
        });
      },
    );
  return router;
};
