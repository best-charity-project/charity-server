const { updateNews } = require('../../models/news/newsAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');

module.exports = router => {
  router
    .route('/:_id')
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
    );
  return router;
};
