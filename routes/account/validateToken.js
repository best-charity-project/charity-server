const { validateToken } = require('../../models/users/userAPI');

module.exports = router => {
  router.route('/:token').get((req, res) => {
    validateToken(req.params.token.trim())
      .then(result => {
        res.json({ isValidToken: result });
      })
      .catch(err => {
        res.json({ isValidToken: false });
      });
  });
  return router;
};
