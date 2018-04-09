const express = require('express');
let router = express.Router();

const newsRoutes = require('./news/newsRoutes');
const libraryRoutes = require('./library/libraryRoutes');
const categoriesRoutes = require('./categories/categoriesRoutes');
const authRoutes = require('./auth/authRoutes');
const educationRoutes = require('./education/educationRoutes');
const locationsRoutes = require('./locations/locationsRoutes');
const accountRoutes = require('./account/accountRoutes');

router.use('/news', newsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/library', libraryRoutes);
router.use('/locations', locationsRoutes);
router.use('/education', educationRoutes);
router.use('/account', accountRoutes);
router = authRoutes(router);

module.exports = router;
