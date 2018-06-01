const express = require('express');
const router = express.Router();
const auth = require('./auth.route');
const eventRoute= require('./event.routes');
const subscription = require('./subscription.route');
const sendRoute = require ('./newsending.route');
require('../utils/passport');

router.use('/auth', auth)
      .use('/events', eventRoute)
      .use('/subscription', subscription)
      .use('/send-news-to-subscribers',sendRoute);
    

module.exports = router;