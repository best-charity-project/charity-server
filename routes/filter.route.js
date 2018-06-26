const express = require('express');
const router = express.Router();
const controller = require('../controllers/filters.controller');

router.post('/', controller.newFilter);
router.get('/', controller.getFilters);
router.delete('/:id', controller.deleteFilterById);
module.exports = router;