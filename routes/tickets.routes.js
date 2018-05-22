const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/tickets.controller');

router.get('/', ticketCtrl.getTickets);
router.post('/', ticketCtrl.createTickets);
router.put('/:id/vote', ticketCtrl.voteForTicket)


module.exports = router;