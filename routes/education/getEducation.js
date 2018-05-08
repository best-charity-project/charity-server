const { getEducation } = require('../../models/education/educationAPI');
const passport = require('passport');
const isValidObjectId = require('../../utils/validation/isValidObjectId');

module.exports = router => {
  router
    .route('/')
    .get(passport.authenticate('jwt-auth', { session: false }), (req, res) => {
      const { userId } = req.query;
      if (!isValidObjectId(userId)) {
        return res.status(400).json({ message: 'Некорректный запрос' });
      }
      getEducation({ userId })
        .then(education => {
          res.json(education);
        })
        .catch(() => {
          res.status(500).json({
            message: 'Запрос не может быть выполнен. Повторите попытку позже',
          });
        });
    });
  return router;
};
