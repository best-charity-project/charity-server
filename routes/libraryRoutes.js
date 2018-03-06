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
    .route('/library')
    .get((req, res) => {
      if (req.query) {
        searchItemsInCategory(req.query).then(items => {
          res.json(items);
        });
      } else {
        getAllItems().then(item => {
          res.json(item);
        });
      }
    })
    .post((req, res) => {
      addOneItem(req.body).then(() => {
        res.json({
          message: 'Document was created successfully!',
        });
      });
    });
  return router;
};

module.exports = libraryRoutes;
