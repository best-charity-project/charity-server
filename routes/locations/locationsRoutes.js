const express = require('express');
let router = express.Router();

const getLocations = require('./getLocations');

router = getLocations(router);

module.exports = router;
