const express = require('express');
const news = require('../controllers/news.controller');
const router = express.Router();

router.post('/', news.createNews);
router.get('/', news.getNews);
router.get('/:id', news.getNewsById);
router.put('/:id', upload.array(), news.changeNews);
router.delete('/:id', news.deleteNews);

module.exports = router;