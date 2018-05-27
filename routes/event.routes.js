const express = require('express');
const router = express.Router();
const controller = require('../controllers/event.controller');

router.post('/', controller.newEvent);
router.get('/', controller.listEvent);
router.delete('/', controller.deleteEvent);
module.exports = router;