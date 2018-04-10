const express = require('express');
let router = express.Router();

const addOrganization = require('./addOrganization');
const getOrganizations = require('./getOrganizations');

router = addOrganization(router);
router = getOrganizations(router);

module.exports = router;
