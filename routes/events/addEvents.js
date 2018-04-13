const { addEvents } = require('../../models/events/eventsAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');

module.exports = router => {
  router
    .route('/')
    .post(
      passport.authenticate('jwt-auth', { session: false }),
      isAdmin,
      (req, res) => {
        addEvents(req.body)
          .then(() => {
            res.json({
              message: 'Событие было успешно добавлено',
            });
          })
          .catch(err => {
            res.status(400).json({
              message: 'Запрос не может быть выполнен. Повторите попытку позже',
            });
          });
      },
    );
  return router;
};
