const Ticket = require('../models/ticket')

module.exports = {

    getAll: function(req, res){
        Ticket.find({}, function(err, tickets){
            if (err) res.status(400).send(err)
            else res.status(200).json(tickets)
        })
    },

    getOne: function(req, res){
        Ticket.findById(req.params.id, function(err, ticket){
            if (err) res.status(400).send(err)
            else res.status(200).json(ticket)
        })
    },

    store: function(req, res){
        let ticket = new Ticket(req.body)

        ticket.save(function(err){
            if (err) res.status(400).send(err)
            else res.status(200).json({})
        });
    }, 

    update: function(req, res){
        Ticket.findByIdAndUpdate(req.params.id, req.body,function(err){
            if (err) res.status(400).send(err)
            else res.status(200).json({})
        })
    },

    destroy: function(req, res){
        Ticket.findByIdAndRemove(req.params.id, function(err){
            if (err) res.status(400).send(err)
            else res.status(200).json({})
        })
    }

};

