const express = require('express');
const router = express.Router();
const sendingNewsController = require('../controllers/sendingnews.controller');

router.get('/', sendingNewsController)


module.exports = router;