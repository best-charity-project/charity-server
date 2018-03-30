const { updateNews } = require('../../models/news/newsAPI');

module.exports = router => {
  router.route('/:_id').put((req, res) => {
    updateNews(req.params._id, req.body).then(() => {
      res.json({
        message: 'News was updated successfully!',
      });
    });
  });
  return router;
};
