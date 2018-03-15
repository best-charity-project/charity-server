const express = require('express');

const router = express.Router();
const {
  addItem,
  getItems,
  fullTextSearch,
  getPendingItems,
  acceptPendingItem,
  deleteLibraryItem,
  getItemById,
  updateLibraryItem,
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
  router.route('/library/pending').get((req, res) => {
    getPendingItems(req.query)
      .then(items => {
        res.json(items);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
  });
  router
    .route('/library/:_id')
    .get((req, res) => {
      getItemById(req.params._id)
        .then(item => {
          res.json(item);
        })
        .catch(err => {
          res.status(400).json(err.message);
        });
    })
    .put((req, res) => {
      acceptPendingItem(req.params._id).then(() => {
        res.json({
          message: 'Pending item was accepted by admin!',
        });
      });
    })
    .delete((req, res) => {
      deleteLibraryItem(req.params._id).then(() => {
        res.json({
          message: 'Library item was deleted by admin!',
        });
      });
    });
  router.route('/library/edit/:_id').put((req, res) => {
    updateLibraryItem(req.params._id, req.body).then(() => {
      res.json({
        message: 'Library item was updated successfully!',
      });
    });
  });
  return router;
};

module.exports = libraryRoutes;
