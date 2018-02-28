const express = require('express');
let router = express.Router();
const newsRoutes = require('./newsRoutes');
const libraryRoutes = require('./libraryRoutes');
const categoriesRoutes = require('./categoriesRoutes');

router = newsRoutes(router);
router = categoriesRoutes(router);
router = libraryRoutes(router);

module.exports = router;
