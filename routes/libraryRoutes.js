const express = require('express');

const router = express.Router();
const {
  addItem,
  getItems,
  fullTextSearch,
} = require('../models/libraryItems/libraryItemAPI');

const libraryRoutes = router => {
  router
    .route('/library')
    .get((req, res) => {
      getItems(req.query)
        .then(items => {
          res.json(items);
        })
        .catch(err => {
          res.status(400).json(err.message);
        });
    })
    .post((req, res) => {
      addItem(req.body).then(() => {
        res.json({
          message: 'Document was created successfully!',
        });
      });
    });
  router.route('/library/search').get((req, res) => {
    fullTextSearch(req.query).then(items => {
      res.json(items);
    });
  });
  return router;
};

module.exports = libraryRoutes;
