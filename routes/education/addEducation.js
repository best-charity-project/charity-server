const { addEducation } = require('../../models/education/educationAPI');

module.exports = router => {
  router.route('/education').post((req, res) => {
    addEducation(req.body).then(() => {
      res.json({
        message: 'education route was created successfully!',
      });
    });
  });
  return router;
};
