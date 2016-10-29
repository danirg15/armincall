const Ticket = require('../models/ticket')

module.exports = {
    getAll: (options, callback) => {
        Ticket.find(options).populate('workshop').exec(callback)
    },

    getOne: (ticket_id, callback) => {
        Ticket.findById(ticket_id, callback)
    },

    store: (ticket, callback) => {
        (new Ticket(ticket)).save(callback)
    }, 

    update: (ticket_id, fields, callback) => {
        Ticket.findByIdAndUpdate(ticket_id, fields, callback)
    },

    destroy: (ticket_id, callback) => {
        Ticket.findByIdAndRemove(ticket_id, callback)
    },

    count: (options, callback) => {
        Ticket.count(options, callback)
    }
}

