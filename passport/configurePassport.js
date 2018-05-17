const passport = require('passport');
const loginStrategy = require('./strategies/login');
const jwtStrategy = require('./strategies/jwt');

module.exports = app => {
    app.use(passport.initialize());
    passport.use('login', loginStrategy);
    passport.use('jwt', jwtStrategy);
    return app;
};