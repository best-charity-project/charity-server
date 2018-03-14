const express = require('express');
let router = express.Router();
const newsRoutes = require('./newsRoutes');
const libraryRoutes = require('./libraryRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const educationRoutes = require('./educationRoutes');
const locationsRoutes = require('./locationsRoutes');

router = newsRoutes(router);
router = categoriesRoutes(router);
router = libraryRoutes(router);
router = educationRoutes(router);
router = locationsRoutes(router);

module.exports = router;
