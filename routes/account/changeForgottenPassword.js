const {
  changeForgottenPassword,
  getUserByToken,
  validateToken,
} = require('../../models/users/userAPI');

module.exports = router => {
  router.route('/change-forgotten-password').post((req, res) => {
    validateToken(req.body.token.trim())
      .then(err => {
        return getUserByToken(req.body.token.trim()).then(user => {
          return changeForgottenPassword(
            user,
            req.body.newPassword.trim(),
          ).then(() => {
            return res.json({ message: 'Пароль был успешно изменен' });
          });
        });
      })
      .catch(err => {
        res.json({
          error: err.message,
        });
      });
  });
  return router;
};
