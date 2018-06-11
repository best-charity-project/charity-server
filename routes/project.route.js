const express = require('express');
const router = express.Router();
const controller = require('../controllers/project.controller');

router.post('/', controller.newProject);
router.put('/:id', controller.UpdateProject);
router.get('/', controller.getProjects);
router.get('/:id', controller.getProjectById);
router.delete('/', controller.deleteProject);
module.exports = router;
