const express = require('express');
let router = express.Router();

const getCategories = require('./getCategories');
const addCategory = require('./addCategory');
const deleteCategory = require('./deleteCategory');

router = getCategories(router);
router = addCategory(router);
router = deleteCategory(router);

module.exports = router;
