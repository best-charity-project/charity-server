const { changePassword, getUser } = require('../../models/users/userAPI');
const passport = require('passport');

module.exports = router => {
  router
    .route('/change-password')
    .post(passport.authenticate('jwt-auth', { session: false }), (req, res) => {
      getUser(req.user.email)
        .then(user => {
          return changePassword(
            user,
            req.body.oldPassword.trim(),
            req.body.newPassword.trim(),
          ).then(() => {
            return res.json({ message: 'Пароль был успешно изменен' });
          });
        })
        .catch(err => {
          res.json({ error: err.message });
        });
    });
  return router;
};
