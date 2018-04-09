const express = require('express');
let router = express.Router();
const changePassword = require('./changePassword');
const changeForgottenPassword = require('./changeForgottenPassword');
const restorePassword = require('./restorePassword');
const validateToken = require('./validateToken');

router = changePassword(router);
router = changeForgottenPassword(router);
router = restorePassword(router);
router = validateToken(router);

module.exports = router;
