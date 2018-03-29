const { getNews } = require('../../models/news/newsAPI');

module.exports = router => {
  router.route('/').get((req, res) => {
    getNews().then(news => {
      res.json(news);
    });
  });
  return router;
};
