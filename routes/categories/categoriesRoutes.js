const getCategories = require('./getCategories');
const addCategory = require('./addCategory');

const categoriesRoutes = router => {
  router = getCategories(router);
  router = addCategory(router);
  return router;
};

module.exports = categoriesRoutes;
