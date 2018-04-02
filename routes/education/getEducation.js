const { getEducation } = require('../../models/education/educationAPI');
const passport = require('passport');

module.exports = router => {
  router
    .route('/')
    .get(
      passport.authenticate('jwt-auth', { session: false }),
      (req, res) => {
        getEducation(req.query)
          .then(education => {
            res.json(education);
          })
          .catch(err => {
            res.status(400).json(err.message);
          });
      });
  return router;
};