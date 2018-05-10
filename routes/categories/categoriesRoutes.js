const express = require('express');
let router = express.Router();

const getCategories = require('./getCategories');
const addCategory = require('./addCategory');
const deleteCategory = require('./deleteCategory');
const updateCategory = require('./updateCategory');

router = getCategories(router);
router = addCategory(router);
router = deleteCategory(router);
router = updateCategory(router);

module.exports = router;
