const express = require('express');
let router = express.Router();
const newsRoutes = require('./newsRoutes');
const categoriesRoutes = require('./categoriesRoutes');

router = newsRoutes(router);
router = categoriesRoutes(router);

module.exports = router;
