const { addOneCategory, getAllCategories } = require('../models/categoriesAPI');
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
  return router;
};

module.exports = categoriesRoutes;
