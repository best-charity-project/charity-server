const passport = require('passport');
const userAPI = require('../../models/users/userAPI');
const isValidEmail = require('./isValidEmail');
const LocalStrategy = require('passport-local').Strategy;
const generateToken = require('./generateToken');

module.exports = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    const userData = {
      email: email.trim(),
      password: password.trim(),
      name: req.body.name.trim(),
      country: req.body.country.trim(),
      city: req.body.city.trim(),
      reasonForRegistration: req.body.reasonForRegistration.trim(),
    };
    if (!isValidEmail(userData.email)) {
      return done({ message: 'Invalid email address' }, null);
    }
    userAPI
      .register(userData)
      .then(userInfo => {
        const payload = {
          sub: userInfo,
        };
        const token = generateToken(payload);
        return done(null, token, userInfo);
      })
      .catch(err => {
        return done(err);
      });
  },
);
