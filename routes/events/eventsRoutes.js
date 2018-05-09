const express = require('express');
let router = express.Router();

const addEvents = require('./addEvents');
const getEvents = require('./getEvents');
const getEventById = require('./getEventById');

router = addEvents(router);
router = getEvents(router);
router = getEventById(router);

module.exports = router;
