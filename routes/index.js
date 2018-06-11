const express = require('express');
const router = express.Router();
const auth = require('./auth.route');
const eventRoute= require('./event.routes');
const subscription = require('./subscription.route');
const newsRoute = require('./news.route');

const sendRoute = require ('./newsending.route');
const projectRoute = require ('./project.route');
require('../utils/passport');

router.use('/auth', auth)
      .use('/events', eventRoute)
      .use('/projects',projectRoute)
      .use('/subscription', subscription)
      .use('/news', newsRoute)
      .use('/send-news-to-subscribers',sendRoute);
    
module.exports = router;