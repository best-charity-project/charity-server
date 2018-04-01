const express = require('express');
let router = express.Router();
const changePassword = require('./changePassword');
const restorePassword = require('./restorePassword');

router = changePassword(router);
router = restorePassword(router);

module.exports = router;
