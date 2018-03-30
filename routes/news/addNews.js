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
        addOneNews(req.body).then(() => {
          res.json({
            message: 'News was created successfully!',
          });
        });
      },
    );
  return router;
};
