const { addEducation } = require('../models/education/educationAPI');
const passport = require('passport');

const educationRoutes = router => {
  router
    .route('/education')
    .post(passport.authenticate('jwt-auth', { session: false }), (req, res) => {
      addEducation(req.body).then(() => {
        res.json({
          message: 'education route was created successfully!',
        });
      });
    });
  return router;
};

module.exports = educationRoutes;
