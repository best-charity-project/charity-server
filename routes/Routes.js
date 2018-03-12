const express = require('express');
let router = express.Router();
const newsRoutes = require('./newsRoutes');
const libraryRoutes = require('./libraryRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const authRoutes = require('./authRoutes');

router = newsRoutes(router);
router = categoriesRoutes(router);
router = libraryRoutes(router);
router = authRoutes(router);

module.exports = router;
