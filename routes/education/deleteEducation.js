const { deleteEducation } = require('../../models/education/educationAPI');
const passport = require('passport');

module.exports = router => {
  router
    .route('/:id')
    .delete(
      passport.authenticate('jwt-auth', { session: false }),
      (req, res) => {
        deleteEducation(req.params.id).then(() => {
          res.json({
            message: 'Карта образовательного маршрута была удалена',
          });
        });
      },
  );
  return router;
};
