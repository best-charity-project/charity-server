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
        .then(result => {
          if (result) {
            return user._id;
          } else {
            throw Error('Wrong password');
          }
          return user._id;
        });
    });
};

const register = data => {
  const { email } = data;
  return passwordHelper
    .hashPassword(password)
    .then(({ hash, salt }) => {
      data.password = hash;
      data.passwordSalt = salt;
      const user = new User(data);
      return user
        .save(data)
        .then(user => {
          return user._id;
        })
        .catch(err => {
          if (err && (11000 === err.code || 11001 === err.code)) {
            reject(new Error('Your email is already taken'));
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
