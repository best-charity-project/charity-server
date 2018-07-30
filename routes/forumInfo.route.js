const express = require('express');
const forumInfo = require('../controllers/forumInfo.controller');
const router = express.Router();
 
router.get('/', forumInfo.getInfo);

module.exports = router;