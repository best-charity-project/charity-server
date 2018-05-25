const express = require('express');
const router = express.Router();
const auth = require('./auth.route');
const subscription = require('./user.subscription.route');
require('../utils/passport');

router.use('/auth', auth)
      .use('/subscription', subscription)

module.exports = router;