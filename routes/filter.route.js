const express = require('express');
const router = express.Router();
const controller = require('../controllers/filters.controller');

router.post('/', controller.newFilter);
module.exports = router;