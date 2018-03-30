const {
  deleteLibraryItem,
} = require('../../models/libraryItems/libraryItemAPI');

module.exports = router => {
  router.route('/:_id').delete((req, res) => {
    deleteLibraryItem(req.params._id).then(() => {
      res.json({
        message: 'Library item was deleted by admin!',
      });
    });
  });
  return router;
};
