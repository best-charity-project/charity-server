const signup = require('./signup');
const login = require('./login');
const getAuthInfo = require('./getAuthInfo');

const authRoutes = router => {
  router = signup(router);
  router = getAuthInfo(router);
  router = login(router);
  return router;
};

module.exports = authRoutes;
