const express = require('express');
const router = express.Router();
require('../utils/passport');

const auth = require('./auth.route');
const subscription = require('./user.subscription.route');

router.use('/auth', auth)
      .use('/subscription', subscription)

module.exports = router;