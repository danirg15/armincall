const router        = require('express').Router()
const async         = require('async')
const distributors  = require('../shared/distributors.json')
const moment = require('moment')

const ReminderController  = require('../controllers/ReminderController')
const DemoController      = require('../controllers/DemoController')
const CallController      = require('../controllers/CallController')
const TicketController    = require('../controllers/TicketController')

const Reminder = require('../models/reminder')
const Demo = require('../models/demo')
const Call = require('../models/call')
const Ticket = require('../models/ticket')


router.get('/distributors', (req, res) => {
    res.json(distributors)
});

router.get('/badges', (req, res) => {
    async.parallel({
        pendingReminders: (callback) => {
            ReminderController.count({}, callback)
        },
        infoReminders: (callback) => {
            Reminder.findOne({'ISODate' : {'$gte': new Date()}})
                    .sort({'ISODate': 'asc'})
                    .select({'ISODate': 1, '_id': 0})
                    .exec((err, rem) => {
                        if (!err && rem) {
                            callback(null, 'Próxima '+moment(rem.ISODate, moment.ISO_8601).fromNow())
                        } else {
                            callback(null, '')
                        }
                    })
        },
        pendingDemos: (callback) => {
            DemoController.count({ 'completed': false }, callback)
        },
        infoDemos: (callback) => {
            Demo.findOne({'ISODate' : {'$gte': new Date()}, 'completed': false})
                .sort({'ISODate': 'asc'})
                .exec((err, dem) => {
                    if (!err && dem) {
                        callback(null, 'Próxima '+moment(dem.ISODate, moment.ISO_8601).fromNow())
                    } else {
                        callback(null, '')
                    }
                })
        },
        pendingCalls: (callback) => {
            CallController.count({ 'isValidated': false }, callback)
        },
        infoCalls: (callback) => {
            Call.findOne({'date' : {'$lte': new Date()}, 'isValidated': false})
                .sort({'date': 'desc'})
                .exec((err, call) => {
                    if (!err && call){
                        callback(null, 'Última '+moment(call.date, moment.ISO_8601).fromNow())
                    } else {
                        callback(null, '')
                    }
                })
        },
        pendingTickets: (callback) => {
            TicketController.count({ 'completed': false }, callback)
        },
        infoTickets: (callback) => {
            Ticket.findOne({'createdAt' : {'$lte': new Date()}, 'completed': false})
                .sort({'createdAt': 'desc'})
                .exec((err, tic) => {
                    if (!err && tic) {
                        callback(null, 'Última '+moment(tic.createdAt, moment.ISO_8601).fromNow())
                    } else {
                        callback(null, '')
                    } 
                })           
        },
    },
    (err, results) => {
        if (err) res.status(500).send(err)
        else res.status(200).json(results)
    })
})

module.exports = router;