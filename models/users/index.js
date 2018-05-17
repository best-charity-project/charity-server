const User = require('./schema');
const passwordHelper = require('../../utils/password.utils');
//const randomstring = require('randomstring');
const {
    passTokenExpires
} = require('../../configs/config.json');
const hasTokenExpired = require('../../utils/hasTokenExpired.utils');

const getUserByEmail = email => User.findOne({
    email
});

const getUser = email =>
    User.findOne({
        email
    })
    .select('+password +passwordSalt')
    .exec()
    .then(user => {
        if (!user) {
            throw Error('Пользователь не существует');
        }
        return user;
    });

const authenticate = (email, password) => {
    return getUser(email).then(user => {
        return passwordHelper
            .verify(password, user.password, user.passwordSalt)
            .then(isMatch => {
                if (!isMatch) {
                    throw Error('Неверный пароль');
                }
                return {
                    userId: user._id,
                    name: user.name,
                    email: user.email,
                    admin: user.admin,
                };
            });
    });
};

const register = data => {
    const {
        password
    } = data;
    return passwordHelper
        .hashPassword(password)
        .then(({
            hash,
            salt
        }) => {
            data.password = hash;
            data.passwordSalt = salt;
            const user = new User(data);
            return user
                .save()
                .then(user => {
                    return {
                        userId: user._id,
                        name: user.name,
                        email: user.email,
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

const changePassword = (user, oldPassword, newPassword) => {
    return passwordHelper
        .verify(oldPassword, user.password, user.passwordSalt)
        .then(isMatch => {
            if (!isMatch) {
                throw Error('Неверный пароль');
            }
            return passwordHelper.hashPassword(newPassword).then(({
                hash,
                salt
            }) => {
                user.password = hash;
                user.passwordSalt = salt;
                return user.save();
            });
        });
};

const changeForgottenPassword = (user, newPassword) => {
    return passwordHelper.hashPassword(newPassword).then(({
        hash,
        salt
    }) => {
        user.password = hash;
        user.passwordSalt = salt;
        user.passChangeToken = null;
        return user.save();
    });
};

const getUserByToken = token => {
    return User.findOne({
        'passChangeToken.token': token
    }).then(user => {
        if (!user) {
            throw Error('Пользователь не существует');
        }
        return user;
    });
};

/*const restorePassword = email => {
    const newPassword = randomstring.generate({
        length: 12
    });
    return getUser(email).then(user => {
        return passwordHelper.hashPassword(newPassword).then(({
            hash,
            salt
        }) => {
            user.password = hash;
            user.passwordSalt = salt;
            return user.save().then(() => newPassword);
        });
    });
};*/

const validateToken = token => {
    return User.findOne({
            'passChangeToken.token': token
        })
        .exec()
        .then(user => {
            if (!user || hasTokenExpired(user.passChangeToken)) {
                throw Error(
                    'Ссылка недействительна, сделайте новый запрос на изменение пароля',
                );
            }
            return true;
        });
};

const saveTokenInUser = (email, token) => {
    getUser(email).then(user => {
        user.passChangeToken = token;
        user.save();
    });
};

module.exports = {
    getUser,
    register,
    authenticate,
    changePassword,
    changeForgottenPassword,
    //restorePassword,
    validateToken,
    saveTokenInUser,
    getUserByToken,
};