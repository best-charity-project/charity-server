const express = require('express');
const router = express.Router();
const controller = require('../controllers/project.controller');
const multer = require('multer'); 
const upload = multer();

router.post('/',upload.array(), controller.newProject);
router.put('/:id',upload.array(), controller.UpdateProject);
router.get('/', controller.getProjects);
router.get('/:id', controller.getProjectById);
router.delete('/', controller.deleteProject);


module.exports = router;
