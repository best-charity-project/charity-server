const { addCategory } = require('../../models/categories/categoriesAPI');

module.exports = router => {
  router.route('/').post((req, res) => {
    addCategory(req.body).then(() => {
      res.json({
        message: 'Category was created successfully!',
      });
    });
  });
  return router;
};
