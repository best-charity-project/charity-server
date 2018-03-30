const { getNewsById } = require('../../models/news/newsAPI');

module.exports = router => {
  router.route(':_id').get((req, res) => {
    getNewsById(req.params._id)
      .then(news => {
        res.json(news);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
  });
  return router;
};
