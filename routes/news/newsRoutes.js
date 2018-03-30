const express = require('express');
let router = express.Router();

const addNews = require('./addNews');
const getNews = require('./getNews');
const getNewsById = require('./getNewsbyId');
const updateNews = require('./updateNews');
const deleteNews = require('./deleteNews');

router = getNews(router);
router = addNews(router);
router = getNewsById(router);
router = updateNews(router);
router = deleteNews(router);

module.exports = router;
