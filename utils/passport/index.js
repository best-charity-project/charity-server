const passport = require('passport');
const UserModel = require('../../schemas/users.schema');

require('./serialize');
require('./localStrategy');
require('./JWTStrategy');

module.exports = passport;