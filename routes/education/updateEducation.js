const { updateEducation } = require('../../models/education/educationAPI');
const passport = require('passport');

module.exports = router => {
  router
    .route('/:id')
    .put(
      passport.authenticate('jwt-auth', { session: false }),
      (req, res) => {
        updateEducation(req.params.id, req.body).then(() => {
          res.json({
            message: 'Карта образовательного маршрута была успешно изменена',
          });
        });
      },
  )
  return router;
};