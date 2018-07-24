const passport = require('passport');
const {
    Strategy,
    ExtractJwt
} = require('passport-jwt');

passport.use(
    new Strategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secret',
        },
        function (jwtPayload, done) {
            User.findById(jwtPayload.id, function (err, user) {
                if (err) {
                    return done(err, false);
                }

                if (!user) {
                    return done(null, false);
                }

                return done(null, user);
            });
        }
    )
);