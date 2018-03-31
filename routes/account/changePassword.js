const { changePassword } = require('../../models/users/userAPI');
const passport = require('passport');

module.exports = router => {
  router
    .route('/change-password')
    .post(passport.authenticate('jwt-auth', { session: false }), (req, res) => {
      changePassword(req.user.email, req.body.oldPassword, req.body.newPassword)
        .then(() => {
          res.json({ message: 'Пароль был успешно изменен' });
        })
        .catch(err => {
          res.json({ error: err.message });
        });
    });
  return router;
};
