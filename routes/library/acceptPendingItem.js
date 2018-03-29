const {
  acceptPendingItem,
} = require('../../models/libraryItems/libraryItemAPI');

module.exports = router => {
  router.route('/library/:_id').put((req, res) => {
    acceptPendingItem(req.params._id).then(() => {
      res.json({
        message: 'Pending item was accepted by admin!',
      });
    });
  });
  return router;
};
