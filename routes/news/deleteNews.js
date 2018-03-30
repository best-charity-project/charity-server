const { deleteNews } = require('../../models/news/newsAPI');

module.exports = router => {
  router.route('/:_id').delete((req, res) => {
    deleteNews(req.params._id).then(() => {
      res.json({
        message: 'News was deleted!',
      });
    });
  });
  return router;
};
