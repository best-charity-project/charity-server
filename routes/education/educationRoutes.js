const addEducation = require('./addEducation');

const educationRoutes = router => {
  router = addEducation(router);
  return router;
};

module.exports = educationRoutes;
