const {
  getAllNews,
  addOneNews,
  updateNews,
  getOneNews,
  deleteNews,
} = require('../models/newsAPI');

const newsRoutes = router => {
  router
    .route('/news')
    .get((req, res) => {
      getAllNews().then(news => {
        res.json(news);
      });
    })
    .post((req, res) => {
      addOneNews(req.body).then(() => {
        res.json({
          message: 'News was created successfully!',
        });
      });
    });
  router
    .route('/news/:_id')
    .put((req, res) => {
      updateNews(req.params._id, req.body).then(() => {
        res.json({
          message: 'News was updated successfully!',
        });
      });
    })
    .get((req, res) => {
      getOneNews(req.params._id).then(news => {
        res.json(news);
      });
    })
    .delete((req, res) => {
      deleteNews(req.params._id).then(() => {
        res.json({
          message: 'News was deleted!',
        });
      });
    });
  return router;
};

module.exports = newsRoutes;
