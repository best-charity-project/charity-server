const {
  getPendingOrganizations,
} = require('../../models/organizations/organizationsAPI');
const passport = require('passport');
const isAdmin = require('../../middlewares/isAdmin');

module.exports = router => {
  router.route('/pending').get(
    passport.authenticate('jwt-auth', { session: false }),
    isAdmin, 
    (req, res) => {
    getPendingOrganizations(req.query)
      .then(items => {
        res.json(items);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
  });
  return router;
};
