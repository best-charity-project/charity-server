const express = require('express');
const router = express.Router();
const controller = require('../controllers/project.controller');
const multer = require('multer'); 
const upload = multer({
    limits: { fieldSize: 25 * 1024 * 1024 }
  });

router.post('/', upload.array(), controller.newProject);
router.put('/:id', upload.array(), controller.UpdateProject);
router.put('/publish/:id', controller.publishProject);
router.get('/', controller.getProjects);
router.get('/:id', controller.getProjectById);
router.delete('/', controller.deleteProjects);
router.delete('/:id', controller.deleteProjectById);


module.exports = router;
