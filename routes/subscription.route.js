const express = require('express');
const subscription = require('../controllers/subscription.controller');
const router = express.Router();

router.post('/newsubscription', subscription.newSubscription);

module.exports = router;