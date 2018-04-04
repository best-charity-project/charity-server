const { getItemsAmount } = require('../../models/libraryItems/libraryItemAPI');

module.exports = router => {
  router.route('/count').get((req, res) => {
    getItemsAmount(req.query)
      .then(amount => {
        res.json(amount);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
  });
  return router;
};
