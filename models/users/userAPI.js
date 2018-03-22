const User = require('./user');
const passwordHelper = require('./hashPassword');

const getUserByEmail = email => User.findOne({ email });

const authenticate = (email, password) => {
  return User.findOne({ email })
    .select('+password +passwordSalt')
    .exec()
    .then(user => {
      if (!user) {
        throw Error('Пользователь не существует');
      }
      return passwordHelper
        .verify(password, user.password, user.passwordSalt)
        .then(isMatch => {
          if (!isMatch) {
            throw Error('Неверный пароль');
          }
          return {
            userId: user._id,
            name: user.name,
            admin: user.admin,
          };
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
          if (11000 === err.code || 11001 === err.code) {
            throw Error('Ваш email уже занят');
          }
          if (err.name === 'ValidationError') {
            throw Error('Проверьте правильность заполненных полей формы');
          }
        });
    })
    .catch(err => {
      throw err;
    });
};

module.exports = { register, authenticate };
