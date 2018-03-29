const {
  getNews,
  addOneNews,
  updateNews,
  deleteNews,
  getNewsById,
} = require('../models/news/newsAPI');

const newsRoutes = router => {
  router
    .route('/news')
    .get((req, res) => {
      getNews().then(news => {
        res.json(news);
      });
    })
    .post((req, res) => {
      addOneNews(req.body)
        .then(() => {
          res.json({
            message: 'Новость была успешно добавлена',
          });
        })
        .catch(err => {
          res.status(500).json({
            error: 'Ошибка сервера. Повторите попытку позже',
          });
        });
    });
  router
    .route('/news/:_id')
    .get((req, res) => {
      getNewsById(req.params._id)
        .then(news => {
          res.json(news);
        })
        .catch(err => {
          res.status(400).json(err.message);
        });
    })
    .put((req, res) => {
      updateNews(req.params._id, req.body)
        .then(news => {
          res.json({
            message: 'Новость была отредактирована',
          });
        })
        .catch(err => {
          res.status(500).json({
            error: 'Ошибка сервера. Повторите попытку позже',
          });
        });
    })
    .delete((req, res) => {
      deleteNews(req.params._id)
        .then(() => {
          res.json({
            message: 'Новость была удалена',
          });
        })
        .catch(err => {
          res.status(500).json({
            error: 'Ошибка сервера. Повторите попытку позже',
          });
        });
    });
  return router;
};

module.exports = newsRoutes;
