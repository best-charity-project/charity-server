const express = require('express');
const galleryImage = require('../controllers/galleryImage.controller');
const router = express.Router();
const multer = require('multer');
const upload = multer({
    limits: {fieldSize: 25 * 1024 * 1024}
});

router.post('/', upload.single('image'), galleryImage.createGalleryImage);
router.delete('/', galleryImage.deleteGalleryImage);

module.exports = router;