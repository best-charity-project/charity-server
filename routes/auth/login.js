const passport = require('passport');

module.exports = router => {
  router.route('/login').post((req, res, next) => {
    return passport.authenticate('local-login', (err, token, userInfo) => {
      if (err) {
        return res.status(401).json({
          authenticated: false,
          error: err.message,
        });
      }
      return res.json({
        authenticated: true,
        token,
        userInfo,
      });
    })(req, res, next);
  });
  return router;
};
