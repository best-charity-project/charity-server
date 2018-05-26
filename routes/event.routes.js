const express = require('express');
const router = express.Router();
const Events = require('../schemas/events.schema');
const controller = require('../controllers/event.controller');
const controllerList = require('../controllers/eventList.controller');
const controllerDeleteEvent = require('../controllers/eventDelete.controller');

router.post('/', controller.newEvent)
router.get('/', controllerList.listEvent)
router.delete('/', controllerDeleteEvent.deleteEvent)
module.exports = router;