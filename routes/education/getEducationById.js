const { getEducationById } = require('../../models/education/educationAPI');
const passport = require('passport');

module.exports = router => {
  router
    .route('/:id')
    .get(
      passport.authenticate('jwt-auth', { session: false }),
      (req, res) => {
        getEducationById(req.params.id)
          .then(education => {
            res.json(education);
          })
          .catch(err => {
            res.status(400).json(err.message);
          });
      })
  return router;
};