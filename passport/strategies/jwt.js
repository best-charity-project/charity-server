const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const {
    Tokens
} = require('../../configs/config');

const options = {};
options.secretOrKey = Tokens.jwtSecret || process.env.jwtSecret;
options.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();

module.exports = new jwtStrategy(options, (jwt_payload, done) => {
    const user = jwt_payload.sub;
    return done(null, user);
});