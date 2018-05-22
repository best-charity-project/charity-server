const UserModel = require('../../schemas/users.schema');
const passport = require('passport');

// паспорт напрямую с базой не работает
passport.serializeUser(function (user, cb) {
    cb(null, user.id); // uses _id as idFieldd
});

passport.deserializeUser(function (id, cb) {
    User.findById(id, cb); // callback version checks id validity automatically
});