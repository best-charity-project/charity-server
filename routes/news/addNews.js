const { addOneNews } = require('../../models/news/newsAPI');

module.exports = router => {
  router.route('/').post((req, res) => {
    addOneNews(req.body).then(() => {
      res.json({
        message: 'News was created successfully!',
      });
    });
  });
  return router;
};
