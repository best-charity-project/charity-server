const express = require('express');
let router = express.Router();
const changePassword = require('./changePassword');

router = changePassword(router);

module.exports = router;
