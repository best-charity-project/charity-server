const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { jwtSecret } = require('../../configs/config');

const opts = {};
opts.secretOrKey = jwtSecret || process.env.jwtSecret;
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

module.exports = new jwtStrategy(opts, (jwt_payload, done) => {
  const user = jwt_payload.sub;
  return done(null, user);
});
