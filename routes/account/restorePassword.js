const {
  restorePassword,
  saveTokenInUser,
} = require('../../models/users/userAPI');
const isValidEmail = require('../../passport/strategies/isValidEmail');
const sendEmail = require('../../nodemailer/sendEmail');
const generateToken = require('./generateToken');
const { devUrlToChangePassword } = require('../../configs/config.json');

module.exports = router => {
  router.route('/restore-password').post((req, res) => {
    const email = req.body.email.trim();
    if (!isValidEmail(email)) {
      res.status(400).json({ message: 'Некорректный адрес электронной почты' });
    }
    const passChangeToken = generateToken();
    const url = `${process.env.urlToChangePassword || devUrlToChangePassword}${
      passChangeToken.token
    }`;
    saveTokenInUser(email, passChangeToken);
    sendEmail(email, 'restorePassword', url)
      .then(() => {
        res.json({
          message: 'Запрос на смену пароля был оправлен на Вашу почту',
        });
      })
      .catch(err => {
        res.status(500).json({ message: 'Ошибка сервера' });
      });
  });
  return router;
};
