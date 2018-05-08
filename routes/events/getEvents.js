const { getEvents } = require('../../models/events/eventsAPI');
const isValidNumber = require('../../utils/validation/isValidNumber');

module.exports = router => {
  router.route('/').get((req, res) => {
    if (!isValidNumber(req.query.count) && req.query.count) {
      return res.json({ message: 'Неверный запрос' });
    }
    getEvents(req.query)
      .then(events => {
        res.json(events);
      })
      .catch(() => {
        res.status(500).json({
          message: 'Запрос не может быть выполнен. Повторите попытку позже',
        });
      });
  });
  return router;
};
