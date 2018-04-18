const express = require('express');
let router = express.Router();

const addOrganization = require('./addOrganization');
const getOrganizations = require('./getOrganizations');
const getPendingOrganizations = require('./getPendingOrganizations');
const acceptPendingOrganization = require('./acceptPendingOrganization');
const deleteOrganization = require('./deleteOrganization');

router = addOrganization(router);
router = getOrganizations(router);
router = getPendingOrganizations(router);
router = acceptPendingOrganization(router);
router = deleteOrganization(router);

module.exports = router;
