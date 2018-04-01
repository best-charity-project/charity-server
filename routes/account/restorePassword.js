const { restorePassword } = require('../../models/users/userAPI');
const passport = require('passport');
const isValidEmail = require('../../passport/strategies/isValidEmail');
const mailer = require('../../nodemailer/mailer');

module.exports = router => {
  router.route('/restore-password').post((req, res) => {
    if (!isValidEmail(req.body.email.trim())) {
      res.status(400).json({ message: 'Некорректный адрес электронной почты' });
    }
    restorePassword(req.body.email.trim())
      .then(newPassword => {
        mailer
          .sendEmail(req.body.email, 'restorePassword', newPassword)
          .then(() => {
            res.json({
              message: 'Новый пароль был отправлен на Вашу почту',
            });
          })
          .catch(err => {
            res.status(500).json({ message: 'Ошибка сервера' });
          });
      })
      .catch(err => {
        res.json({ error: err.message });
      });
  });
  return router;
};
