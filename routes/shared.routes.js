let router = require('express').Router()
let async = require('async')
let data = require('../data/static_data.json')

let Reminder = require('../models/reminder')
let Demo = require('../models/demo')
let Call = require('../models/call')
let Ticket = require('../models/ticket')


router.get('/distributors', function(req, res){
    res.json(data.distributors)
});

router.get('/badges', function(req, res){
    
    async.parallel({
        pendingReminders: function(callback) {
            Reminder.count({}, function(err, reminders){
                callback(err, reminders)
            })
        },
        pendingDemos: function(callback) {
            Demo.count({}, function(err, demos){
                callback(err, demos)
            })
        },
        pendingCalls: function(callback) {
            Call.count({ isValidated: false }, function(err, calls){
                callback(err, calls)
            })
        },
        pendingTickets: function(callback) {
            Ticket.count({ completed: false }, function(err, tickets){
                callback(err, tickets)
            })
        }
    },
    function(err, results) {
        if (err) res.status(400).send(err)
        else res.status(200).json(results)
    });

})

module.exports = router;