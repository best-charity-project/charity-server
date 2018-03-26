const {
  addCategory,
  getCategories,
} = require('../models/categories/categoriesAPI');

const categoriesRoutes = router => {
  router
    .route('/categories')
    .get((req, res) => {
      getCategories().then(categories => {
        res.json(categories);
      });
    })
    .post((req, res) => {
      addCategory(req.body).then(() => {
        res.json({
          message: 'Category was created successfully!',
        });
      });
    });
  return router;
};

module.exports = categoriesRoutes;
