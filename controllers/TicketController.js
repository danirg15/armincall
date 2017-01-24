const Ticket = require('../models/ticket')
const Call = require('../models/call')

module.exports = {
    getAll: (options, callback) => {
        Ticket.find(options)
              .sort({createdAt: 'desc'})
              .populate('workshop')
              .populate('calls')
              .exec(callback)
    },

    getOne: (ticket_id, callback) => {
        Ticket.findById(ticket_id)
              .populate('workshop')
              .populate('calls')
              .exec(callback)
    },

    store: (ticket, callback) => {
        (new Ticket(ticket)).save(callback)
    }, 

    update: (ticket_id, fields, callback) => {
        Ticket.findByIdAndUpdate(ticket_id, fields, callback)

        if (fields.calls) {
            Call.update(
                    { _id: { $in: fields.calls } }, 
                    { $set:{'isValidated': true} }, 
                    { 'multi': true},
            (err) => {})
        }
    },

    destroy: (ticket_id, callback) => {
        Ticket.findByIdAndRemove(ticket_id, callback)
    },

    count: (options, callback) => {
        Ticket.count(options, callback)
    }
}

