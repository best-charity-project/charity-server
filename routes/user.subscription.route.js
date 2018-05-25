const express = require('express');
const router = express.Router();
const controller = require('../controllers/subscription.controller');

router.post('/', controller.newSubscription);

module.exports = router;