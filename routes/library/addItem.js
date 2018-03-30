const { addItem } = require('../../models/libraryItems/libraryItemAPI');
const passport = require('passport');

module.exports = router => {
  router
    .route('/')
    .post(passport.authenticate('jwt-auth', { session: false }), (req, res) => {
      addItem(req.body).then(() => {
        res.json({
          message: 'Document was created successfully!',
        });
      });
    });
  return router;
};
