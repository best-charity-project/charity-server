const { getEventById } = require('../../models/events/eventsAPI');
const isValidObjectId = require('../../utils/validation/isValidObjectId');

module.exports = router => {
  router.route('/:id').get((req, res) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: 'Некорректный запрос' });
    }
    getEventById(id)
      .then(event => {
        res.json(event);
      })
      .catch(() => {
        res.status(500).json({
          message: 'Запрос не может быть выполнен. Повторите попытку позже',
        });
      });
  });
  return router;
};
