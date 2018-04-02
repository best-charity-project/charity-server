const express = require('express');
let router = express.Router();

const addEducation = require('./addEducation');
const deleteEducation = require('./deleteEducation');
const getEducationById = require('./getEducationById');
const getEducation = require('./getEducation');
const updateEducation = require('./updateEducation');

router = addEducation(router);
router = deleteEducation(router);
router = getEducationById(router);
router = getEducation(router);
router = updateEducation(router);

module.exports = router;
