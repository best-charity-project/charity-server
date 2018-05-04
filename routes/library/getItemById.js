const { getItemById } = require('../../models/libraryItems/libraryItemAPI');
const isValidObjectId = require('../../models/utils/isValidObjectId');

module.exports = router => {
  router.route('/:id').get((req, res) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: 'Некорректный запрос' });
    }
    getItemById(id).then(item => {
      res.json(item);
    });
  });
  return router;
};
