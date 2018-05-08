const { getNews } = require('../../models/news/newsAPI');

module.exports = router => {
  router.route('/').get((req, res) => {
    getNews()
      .then(news => {
        res.json(news);
      })
      .catch(err => {
        res.status(500).json({
          message: 'Запрос не может быть выполнен. Повторите попытку позже',
        });
      });
  });
  return router;
};
