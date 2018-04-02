const express = require('express');
let router = express.Router();

const addItem = require('./addItem');
const getItems = require('./getItems');
const fullTextSearch = require('./fullTextSearch');
const getPendingItems = require('./getPendingItems');
const acceptPendingItem = require('./acceptPendingItem');
const deleteLibraryItem = require('./deleteLibraryItem');
const getItemById = require('./getItemById');
const updateLibraryItem = require('./updateLibraryItem');

router = addItem(router);
router = getItems(router);
router = fullTextSearch(router);
router = getPendingItems(router);
router = acceptPendingItem(router);
router = deleteLibraryItem(router);
router = getItemById(router);
router = updateLibraryItem(router);

module.exports = router;
