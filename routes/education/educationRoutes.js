const express = require('express');
let router = express.Router();

const addEducation = require('./addEducation');
const filterRoutes = require('./filterRoutes');

router = addEducation(router);
router = filterRoutes(router);

module.exports = router;
