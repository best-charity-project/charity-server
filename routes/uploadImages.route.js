const express = require('express');
const image = require('../controllers/image.controller');
const router = express.Router();
const multer = require('multer'); 
const upload = multer();

router.post('/', upload.single('image'), image.createImage);

module.exports = router;