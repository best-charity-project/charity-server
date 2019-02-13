const express = require('express');
const router = express.Router();
const materials = require('../controllers/materials.controller');
const multer = require('multer'); 
const upload = multer({
    dest: "./uploads"
});

router.post('/', upload.single("file"), materials.create);
router.put('/:id', upload.single("file"), materials.update);
router.get('/', materials.getAll);
router.get('/:id', materials.getById);
router.delete('/', upload.array(), materials.delete);

module.exports = router;
