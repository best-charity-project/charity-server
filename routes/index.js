const express = require('express');
const router = express.Router();
const auth = require('./auth.route');
const eventRoute= require('./event.routes');
const subscription = require('./subscription.route');
require('../utils/passport');
router.use('/auth', auth)
      .use('/events', eventRoute)
      .use('/subscription', subscription);
    

module.exports = router;