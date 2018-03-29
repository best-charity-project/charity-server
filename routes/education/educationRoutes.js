const express = require('express');
let router = express.Router();

const addEducation = require('./addEducation');

router = addEducation(router);

module.exports = router;
