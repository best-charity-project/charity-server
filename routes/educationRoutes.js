const {
  addEducation,
  getEducation,
} = require('../models/education/educationAPI');

const educationRoutes = router => {
  router
    .route('/education')
    .post((req, res) => {
      addEducation(req.body).then(() => {
        res.json({
          message: 'education route was created successfully!',
        });
      });
    })
    .get((req, res) => {
      getEducation().then(education => {
        res.json(education);
      });
    })
  return router;
};

module.exports = educationRoutes;
