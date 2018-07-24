let passport = require('passport');
let LocalStrategy = require('passport-local');
let UserModel = require('../../schemas/users.schema');

passport.use(
    new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },
        function (req, email, password, done) {
            UserModel.findOne({
                email
            }, function (err, user) {
                if (err) {
                    return done(err);
                }
                console.log(user)
                if (!user || !user.checkPassword(password)) {
                    return done(null, false, 'No such user or password is incorrect.');
                }
                return done(null, user);
            });
        }
    )
);