const express = require('express');
const controller = require('../controllers/subscription.controller');
const router = express.Router();

router.post('/', controller.newSubscription);

module.exports = router;