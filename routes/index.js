const express = require('express');
const router = express.Router();
require('../utils/passport');

const auth = require('./auth.route');

router.use('/auth', auth);
// router.use('/user', user);

module.exports = router;