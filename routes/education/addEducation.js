const { addEducation } = require('../../models/education/educationAPI');
const passport = require('passport');

module.exports = router => {
  router
    .route('/')
    .post(
      passport.authenticate('jwt-auth', { session: false }),
      (req, res) => {
        addEducation(req.body).then(() => {
          res.json({
            message: 'education route was created successfully!',
          });
        });
      });
  return router;
};
