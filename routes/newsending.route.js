const express = require('express');
const router = express.Router();
const controller = require('../controllers/sendingnews.controller');

router.get('/', controller.getSubAndNews)
// router.get('/users',controller.getSubscribers);


module.exports = router;