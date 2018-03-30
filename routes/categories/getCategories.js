const { getCategories } = require('../../models/categories/categoriesAPI');

module.exports = router => {
  router.route('/').get((req, res) => {
    getCategories().then(categories => {
      res.json(categories);
    });
  });
  return router;
};
