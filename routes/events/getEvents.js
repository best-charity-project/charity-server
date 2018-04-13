const { getEvents } = require('../../models/events/eventsAPI');

module.exports = router => {
  router.route('/').get((req, res) => {
    getEvents().then(events => {
      res.json(events);
    });
  });
  return router;
};
