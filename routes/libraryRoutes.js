const express = require('express');

const router = express.Router();
const {
  addOneItem,
  getAllItems,
  searchByType
} = require('../models/libraryItemAPI');

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
        message: 'Document was created successfully!'
      });
    });
  });
router.route('/libraryItems/:type').get((req, res) => {
  searchByType(req.params.type).then(item => {
    res.json(item);
  });
});
module.exports = router;
