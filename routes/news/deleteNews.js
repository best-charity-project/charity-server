const { deleteNews } = require('../../models/news/newsAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');

module.exports = router => {
  router
    .route('/:_id')
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
