const router    = require('express').Router()
const async     = require('async')
const data      = require('../data/static_data.json')

const ReminderController  = require('../controllers/ReminderController')
const DemoController      = require('../controllers/DemoController')
const CallController      = require('../controllers/CallController')
const TicketController    = require('../controllers/TicketController')

router.get('/distributors', (req, res) => {
    res.json(data.distributors)
});

router.get('/badges', (req, res) => {
    async.parallel({
        pendingReminders: (callback) => {
            ReminderController.count({}, callback)
        },
        pendingDemos: (callback) => {
            DemoController.count({}, callback)
        },
        pendingCalls: (callback) => {
            CallController.count({ 'isValidated': false }, callback)
        },
        pendingTickets: (callback) => {
            TicketController.count({ 'completed': false }, callback)
        }
    },
    (err, results) => {
        if (err) res.status(500).send(err)
        else res.status(200).json(results)
    })
})

module.exports = router;