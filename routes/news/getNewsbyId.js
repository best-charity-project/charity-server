const { getNewsById } = require('../../models/news/newsAPI');
const isValidObjectId = require('../../utils/validation/isValidObjectId');

module.exports = router => {
  router.route('/:id').get((req, res) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: 'Некорректный запрос' });
    }
    getNewsById(id)
      .then(news => {
        res.json(news);
      })
      .catch(() => {
        res.status(500).json(err.message);
      });
  });
  return router;
};
