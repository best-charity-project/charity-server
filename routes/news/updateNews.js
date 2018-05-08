const { updateNews } = require('../../models/news/newsAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');

module.exports = router => {
  router
    .route('/:id')
    .put(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
          return res.status(400).json({ message: 'Некорректный запрос' });
        }
        updateNews(req.params.id, req.body)
          .then(news => {
            res.json({
              message: 'Новость была отредактирована',
            });
          })
          .catch(() => {
            res.status(500).json({
              message: 'Запрос не может быть выполнен. Повторите попытку позже',
            });
          });
      },
    );
  return router;
};
