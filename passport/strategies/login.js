const userAPI = require('../../models/users');
const localStrategy = require('passport-local').Strategy;
const generateToken = require('./generateToken');

module.exports = new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false,
        passReqToCallback: true,
    },
    (req, email, password, done) => {
        const userData = {
            email: email.trim(),
            password: password.trim(),
        };
        userAPI
            .authenticate(userData.email, userData.password)
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