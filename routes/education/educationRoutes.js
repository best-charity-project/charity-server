const express = require('express');
let router = express.Router();

const addEducation = require('./addEducation');
const deleteEducation = require('./deleteEducation');
const getEducation = require('./getEducation');
const updateEducation = require('./updateEducation');

router = addEducation(router);
router = deleteEducation(router);
router = getEducation(router);
router = updateEducation(router);

module.exports = router;
