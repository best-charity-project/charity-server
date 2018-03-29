const express = require('express');
let router = express.Router();
const newsRoutes = require('./news/newsRoutes');
const libraryRoutes = require('./library/libraryRoutes');
const categoriesRoutes = require('./categories/categoriesRoutes');
const authRoutes = require('./auth/authRoutes');
const educationRoutes = require('./education/educationRoutes');
const locationsRoutes = require('./locations/locationsRoutes');

router = newsRoutes(router);
router = categoriesRoutes(router);
router = libraryRoutes(router);
router = authRoutes(router);
router = educationRoutes(router);
router = locationsRoutes(router);

module.exports = router;
