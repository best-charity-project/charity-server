const express = require('express');

const router = express.Router();
const {
  addItem,
  getItems,
<<<<<<< HEAD
  fullTextSearch,
=======
  getPendingItems,
>>>>>>> 9a31bd3ba0169085ea3ae01599d3b74b974dc831
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
<<<<<<< HEAD
  router.route('/library/search').get((req, res) => {
    fullTextSearch(req.query).then(items => {
      res.json(items);
    });
=======
  router.route('/library/pending').get((req, res) => {
    getPendingItems(req.query)
      .then(items => {
        res.json(items);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
>>>>>>> 9a31bd3ba0169085ea3ae01599d3b74b974dc831
  });
  return router;
};

module.exports = libraryRoutes;
