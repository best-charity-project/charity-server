const { getEvents } = require('../../models/events/eventsAPI');
const isValidNumber = require('../../models/utils/isValidNumber')

module.exports = router => {
  router.route('/').get((req, res) => {
    if (!isValidNumber(req.query.count) && req.query.count) {
      return res.json({ message: 'Неверный запрос' });
    }
    getEvents(req.query).then(events => {
      res.json(events);
    });
  });
  return router;
};
