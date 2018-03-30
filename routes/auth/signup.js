const passport = require('passport');

module.exports = router => {
  router.route('/signup').post((req, res, next) => {
    return passport.authenticate('local-signup', (err, token, userInfo) => {
      if (err) {
        return res.json({ error: err.message });
      }
      if (userInfo) {
        return res.json({
          authenticated: true,
          message: 'Ваш аккаунт был успешно создан!',
          token,
          userInfo,
        });
      }
    })(req, res, next);
  });
  return router;
};
