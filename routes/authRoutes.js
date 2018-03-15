const passport = require('passport');

const authRoutes = router => {
  router.route('/signup').post((req, res, next) => {
    return passport.authenticate('local-signup', (err, token, userInfo) => {
      if (err) {
        return res.json({ error: err.message });
      }
      if (userInfo) {
        return res.json({
          authenticated: true,
          message: 'Your account was created successfully!',
          token,
          userInfo,
        });
      }
    })(req, res, next);
  });
  router
    .route('/auth-info')
    .get(passport.authenticate('jwt-auth', { session: false }), (req, res) => {
      res.json({
        authenticated: true,
        userInfo: req.user,
      });
    });
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

module.exports = authRoutes;
