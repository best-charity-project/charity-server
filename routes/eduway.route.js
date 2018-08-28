const express = require('express');
const router = express.Router();
const controller = require('../controllers/eduway.controller');

router.get('/', controller.getPublicMarkers);
router.get('/a', controller.getMarkers);
router.post('/', controller.createMarker);
router.put('/:id', controller.updateMarker);
router.delete('/:id', controller.deleteMarker);
module.exports = router;
