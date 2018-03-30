const passport = require('passport');
const isAdmin = require('../middlewares/isAdmin');

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
    .post(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        addOneNews(req.body).then(() => {
          res.json({
            message: 'News was created successfully!',
          });
        });
      },
  );
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
    .put(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        updateNews(req.params._id, req.body).then(() => {
          res.json({
            message: 'News was updated successfully!',
          });
        });
      },
  )
    .delete(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        deleteNews(req.params._id).then(() => {
          res.json({
            message: 'News was deleted!',
          });
        });
      },
  );
  return router;
};

module.exports = newsRoutes;
