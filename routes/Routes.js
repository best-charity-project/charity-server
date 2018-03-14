const express = require('express');
let router = express.Router();
const newsRoutes = require('./newsRoutes');
const libraryRoutes = require('./libraryRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const educationRoutes = require('./educationRoutes');

router = newsRoutes(router);
router = categoriesRoutes(router);
router = libraryRoutes(router);
router = educationRoutes(router);

module.exports = router;
