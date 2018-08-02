const express = require('express');
const forumSearch = require('../controllers/forumSearch.controller');
const router = express.Router();
 
router.get('/', forumSearch.findInfo);

module.exports = router;