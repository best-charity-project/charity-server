const { addOneNews } = require('../../models/news/newsAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');

module.exports = router => {
  router
    .route('/')
    .post(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        addOneNews(req.body)
          .then(() => {
            res.json({
              message: 'Новость была успешно добавлена',
            });
          })
          .catch(err => {
            res.status(400).json({
              message: 'Запрос не может быть выполнен. Повторите попытку позже',
            });
          });
      },
    );
  return router;
};
