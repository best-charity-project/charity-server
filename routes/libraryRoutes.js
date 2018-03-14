const express = require('express');

const router = express.Router();
const {
  addItem,
  getItems,
  getPendingItems,
  acceptPendingItem,
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
  router.route('/library/pending').get((req, res) => {
    getPendingItems(req.query)
      .then(items => {
        res.json(items);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
  });
  router.route('/library/:_id').put((req, res) => {
    acceptPendingItem(req.params._id).then(() => {
      res.json({
        message: 'Pending item was accepted by admin!',
      });
    });
  });
  return router;
};

module.exports = libraryRoutes;
