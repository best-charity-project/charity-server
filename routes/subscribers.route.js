const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscribers.controller');

router.get('/', subscriberController.getSubscribers)
router.put('/:id/subscribe', subscriberController.subscribe)

module.exports = router;