const passport = require('passport');
const localSignupStrategy = require('./strategies/local-signup');
const localLoginStrategy = require('./strategies/local-login');
const jwtStrategy = require('./strategies/jwt-auth');

module.exports = app => {
  app.use(passport.initialize());
  passport.use('local-signup', localSignupStrategy);
  passport.use('local-login', localLoginStrategy);
  passport.use('jwt-auth', jwtStrategy);
  return app;
};
