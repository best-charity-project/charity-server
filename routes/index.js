const express = require('express');
const router = express.Router();
require('../utils/passport');

const auth = require('./auth.route');
const eventRoute= require('./event.routes');
router.use('/auth', auth)
      .use('/admin-panel/events', eventRoute)

module.exports = router;