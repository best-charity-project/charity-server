const express = require('express');
const image = require('../controllers/image.controller');
const router = express.Router();
const multer = require('multer'); 
const upload = multer({
    limits: { fieldSize: 25 * 1024 * 1024 }
  });

router.post('/', upload.single('image'), image.createImage);

module.exports = router;