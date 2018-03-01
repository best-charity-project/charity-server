const {
  addOneCategory,
  getAllCategories,
  getCategoryByTag,
} = require('../models/categories/categoriesAPI');
const categoriesRoutes = router => {
  router
    .route('/Library/categories')
    .get((req, res) => {
      getAllCategories().then(category => {
        res.json(category);
      });
    })
    .post((req, res) => {
      addOneCategory(req.body).then(() => {
        res.json({
          message: 'Category was created successfully!',
        });
      });
    });
  router.route('/Library/categories/:title').get((req, res) => {
    getCategoryByTag(req.params.title).then(category => {
      res.json(category);
    });
  });
  return router;
};

module.exports = categoriesRoutes;
