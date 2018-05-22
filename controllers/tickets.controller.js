const mongoose = require('../utils/db.utils');
const error = require('../utils/error')

const TicketsModel = require('../schemas/tickets.schemas');
const pick = require('lodash/pick');

module.exports = {
    async getTickets(req, res) {
        let response = await TicketsModel.find();
        let ticketList = response.map(ticket => pick(ticket, TicketsModel.publicFields));
        res.status(200).json({
            tickets: ticketList
        });
    },
    async createTickets(req, res) {
        let newTicketObject = req.body
        let newTicket = await TicketsModel.create(newTicketObject);
        res.status(200).json({
            ticket: pick(newTicket, TicketsModel.publicFields)
        });
    },
    async voteForTicket(req, res) {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            next(error(400))
        }

        let ticketById = await TicketsModel.findById(req.params.id);

        if (!ticketById) {
            next(error(404))
        }

        let updatedTicket = Object.assign(ticketById, {
            "rating": ticketById.rating + 1
        });
        let votedTicket = await ticketById.set(updatedTicket).save();
        res.status(200).json(pick(votedTicket, TicketsModel.publicFields));
    }
}