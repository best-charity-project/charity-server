const { addItem } = require('../../models/libraryItems/libraryItemAPI');

module.exports = router => {
  router.route('/library').post((req, res) => {
    addItem(req.body).then(() => {
      res.json({
        message: 'Document was created successfully!',
      });
    });
  });
  return router;
};
