const User = require('./user');
const passwordHelper = require('./hashPassword');

const getUserByEmail = email => User.findOne({ email });

const authenticate = (email, password) => {
  return User.findOne({ email })
    .select('+password +passwordSalt')
    .exec()
    .then(user => {
      if (!user) {
        throw Error('User not found');
        return null;
      }
      return passwordHelper
        .verify(password, user.password, user.passwordSalt)
        .then(isMatch => {
          if (isMatch) {
            return {
              userId: user._id,
              name: user.name,
              admin: user.admin,
            };
          } else {
            throw Error('Wrong password');
            return null;
          }
        });
    });
};

const register = data => {
  const { password } = data;
  return passwordHelper
    .hashPassword(password)
    .then(({ hash, salt }) => {
      data.password = hash;
      data.passwordSalt = salt;
      const user = new User(data);
      return user
        .save()
        .then(user => {
          return {
            userId: user._id,
            name: user.name,
            admin: user.admin,
          };
        })
        .catch(err => {
          if (err && (11000 === err.code || 11001 === err.code)) {
            throw new Error('Your email is already taken');
          }
        });
    })
    .catch(err => {
      if (err) {
        throw err;
      }
    });
};

module.exports = { register, authenticate };
