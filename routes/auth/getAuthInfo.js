const passport = require('passport');

module.exports = router => {
  router
    .route('/auth-info')
    .get(passport.authenticate('jwt-auth', { session: false }), (req, res) => {
      res.json({
        authenticated: true,
        userInfo: req.user,
      });
    });
  return router;
};
