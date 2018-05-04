const { deleteEducation } = require('../../models/education/educationAPI');
const passport = require('passport');
const isValidObjectId = require('../../models/utils/isValidObjectId');

module.exports = router => {
  router
    .route('/:id')
    .delete(
      passport.authenticate('jwt-auth', { session: false }),
      (req, res) => {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
          return res.status(400).json({ message: 'Некорректный запрос' });
        }
        deleteEducation(id).then(() => {
          res.json({
            message: 'Карта образовательного маршрута была удалена',
          });
        });
      },
    );
  return router;
};
