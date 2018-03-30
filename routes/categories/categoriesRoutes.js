const express = require('express');
let router = express.Router();

const getCategories = require('./getCategories');
const addCategory = require('./addCategory');

router = getCategories(router);
router = addCategory(router);

module.exports = router;
