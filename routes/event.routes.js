const express = require('express');
const router = express.Router();
const controller = require('../controllers/event.controller');

router.post('/', controller.newEvent);
router.put('/:id', controller.UpdateEvent);
router.get('/', controller.getEvents);
router.get('/:id', controller.getEvent);
router.delete('/', controller.deleteEvent);
module.exports = router;