const { addEducation } = require('../../models/education/educationAPI');
const passport = require('passport');

module.exports = router => {
  router
    .route('/')
    .post(passport.authenticate('jwt-auth', { session: false }), (req, res) => {
      addEducation(req.body)
        .then(() => {
          res.json({
            message: 'Карта образовательного маршрута была успешно создана',
          });
        })
        .catch(() => {
          res.status(500).json({
            message: 'Произошла ошибка при сохранении маршрута',
          });
        });
    });
  return router;
};
