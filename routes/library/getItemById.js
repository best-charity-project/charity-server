const { getItemById } = require('../../models/libraryItems/libraryItemAPI');
const isValidObjectId = require('../../utils/validation/isValidObjectId');

module.exports = router => {
  router.route('/:id').get((req, res) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: 'Некорректный запрос' });
    }
    getItemById(id)
      .then(item => {
        res.json(item);
      })
      .catch(() => {
        res.status(500).json({
          message: 'Запрос не может быть выполнен. Повторите попытку позже',
        });
      });
  });
  return router;
};
