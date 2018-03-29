const {
  updateLibraryItem,
} = require('../../models/libraryItems/libraryItemAPI');

module.exports = router => {
  router.route('library/edit/:_id').put((req, res) => {
    updateLibraryItem(req.params._id, req.body).then(() => {
      res.json({
        message: 'Library item was updated successfully!',
      });
    });
  });
  return router;
};
