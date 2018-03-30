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
        acceptPendingItem(req.params._id).then(() => {
          res.json({
            message: 'Pending item was accepted by admin!',
          });
        });
      },
    );
  return router;
};
