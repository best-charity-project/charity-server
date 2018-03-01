const express = require('express');

const router = express.Router();
const {
  addOneItem,
  getAllItems,
  searchByType,
  searchItemsInCategory,
} = require('../models/libraryItems/libraryItemAPI');
const libraryRoutes = router => {
  router
    .route('/libraryItems')
    .get((req, res) => {
      getAllItems().then(item => {
        res.json(item);
      });
    })
    .post((req, res) => {
      addOneItem(req.body).then(() => {
        res.json({
          message: 'Document was created successfully!',
        });
      });
    });
  router.route('/libraryItems/:type').get((req, res) => {
    searchByType(req.params.type).then(item => {
      res.json(item);
    });
  });

  router
    .route('/categories/:categoryTag/libraryItems/:type')
    .get((req, res) => {
      searchItemsInCategory(req.params).then(items => {
        res.json(items);
      });
    });
  return router;
};
module.exports = libraryRoutes;
