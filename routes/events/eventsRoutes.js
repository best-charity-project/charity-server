const express = require('express');
let router = express.Router();

const addEvents = require('./addEvents');
const getEvents = require('./getEvents');

router = addEvents(router);
router = getEvents(router);

module.exports = router;
