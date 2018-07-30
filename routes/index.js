const express = require('express');
const router = express.Router();
const auth = require('./auth.route');
const eventRoute= require('./event.routes');
const subscription = require('./subscription.route');
const newsRoute = require('./news.route');
const imageRoute = require('./uploadImages.route');
const galleryImageRoute = require('./uploadGalleryImage.route');
const sendRoute = require ('./newsending.route');
const projectRoute = require ('./project.route');
const filterRoute = require ('./filter.route');
const forumGroupRoute = require('./forumGroup.route');
const forumTopicRoute = require('./forumTopic.route');
const forumPostRoute = require('./forumPost.route');
const forumUserRoute = require('./forumUser.route');
const forumInfoRoute = require('./forumInfo.route');
const forumSearchRoute = require('./forumSearch.route');

require('../utils/passport');

router.use('/auth', auth)
      .use('/events', eventRoute)
      .use('/projects',projectRoute)
      .use('/subscription', subscription)
      .use('/news', newsRoute)
      .use('/send-news-to-subscribers',sendRoute)
      .use('/uploadImages', imageRoute)
      .use('/uploadGalleryImage', galleryImageRoute)
      .use('/filters', filterRoute)
      .use('/forumGroup', forumGroupRoute)
      .use('/forumTopic', forumTopicRoute)
      .use('/forumPost', forumPostRoute)
      .use('/forumUser', forumUserRoute)
      .use('/forumInfo', forumInfoRoute)
      .use('/forumSearch', forumSearchRoute)
    
module.exports = router;