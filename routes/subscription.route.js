const express = require('express');
const subscription = require('../controllers/subscription.controller');
const router = express.Router();

router.post('/', subscription.newSubscription);
router.get('/', subscription.getSubscribers);
router.put('/:id/subscribe', subscription.subscribe);

module.exports = router;