const { addEducation, getEducationById, getEducationByUserId, updateEducation, deleteEducation } = require('../models/education/educationAPI');
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
  router
    .route('/education/:userId')
    .get((req, res) => {
      getEducationByUserId(req.params.userId)
        .then(education => {
          res.json(education);
        })
        .catch(err => {
          res.status(400).json(err.message);
        });
    });
  router
    .route('/education/:userId/:_id')
    .get((req, res) => {
      getEducationById(req.params._id)
        .then(education => {
          res.json(education);
        })
        .catch(err => {
          res.status(400).json(err.message);
        });
    })
    .put((req, res) => {
      updateEducation(req.params._id, req.body).then(() => {
        res.json({
          message: 'Карта образовательного маршрута была успешно изменена!',
        });
      });
    },
  )
    .delete((req, res) => {
      deleteEducation(req.params._id).then(() => {
        res.json({
          message: 'Карта маршрута была удалена',
        });
      });
    },
  );
  return router;
};

module.exports = educationRoutes;
