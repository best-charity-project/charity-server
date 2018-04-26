const { addCategory } = require('../../models/categories/categoriesAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');

module.exports = router => {
  router
    .route('/')
    .post(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        addCategory(req.body)
          .then(() =>
            res.json({
              message: 'Категория была успешно создана',
            }),
          )
          .catch(err => {
            res.status(500).json({
              message: 'Запрос не может быть выполнен. Повторите попытку позже',
            });
          });
      },
    );
  return router;
};
