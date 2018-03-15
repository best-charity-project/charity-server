const passport = require('passport');
const userAPI = require('../../models/users/userAPI');
const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { jwtSecret } = require('../../configs/config');

const opts = {};
opts.secretOrKey = jwtSecret;
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

module.exports = new jwtStrategy(opts, (jwt_payload, done) => {
  const user = jwt_payload.sub;
  return done(null, user);
});
