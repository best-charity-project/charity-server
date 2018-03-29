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
      addItem(req.body)
        .then(() => {
          res.json({
            message: 'Информация была добавлена в библиотеку',
          });
        })
        .catch(err => {
          res.status(500).json({
            error: 'Ошибка сервера. Повторите попытку позже',
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
      getItemById(req.params._id).then(item => {
        res.json(item);
      });
    })
    .put((req, res) => {
      acceptPendingItem(req.params._id)
        .then(() => {
          res.json({
            message:
              'Заявка на добавление документа была одобрена администратором',
          });
        })
        .catch(err => {
          res.status(500).json({
            error: 'Ошибка сервера. Повторите попытку позже',
          });
        });
    })
    .delete((req, res) => {
      deleteLibraryItem(req.params._id)
        .then(() => {
          res.json({
            message: 'Документ был удален',
          });
        })
        .catch(err => {
          res.status(500).json({
            error: 'Ошибка сервера. Повторите попытку позже',
          });
        });
    });
  router.route('/library/edit/:_id').put((req, res) => {
    updateLibraryItem(req.params._id, req.body)
      .then(() => {
        res.json({
          message: 'Документ был отредактирован',
        });
      })
      .catch(err => {
        res.status(500).json({
          error: 'Ошибка сервера. Повторите попытку позже',
        });
      });
  });
  return router;
};

module.exports = libraryRoutes;
