const { addItem } = require('../../models/libraryItems/libraryItemAPI');
const passport = require('passport');

module.exports = router => {
  router
    .route('/')
    .post(passport.authenticate('jwt-auth', { session: false }), (req, res) => {
      addItem(req.body)
        .then(() => {
          res.json({
            message: 'Информация была добавлена в библиотеку',
          });
        })
        .catch(err => {
          res.status(400).json({
            message: 'Запрос не может быть выполнен. Повторите попытку позже',
          });
        });
    });
  return router;
};
