const Reminder = require('../models/reminder')
const moment = require('moment')

module.exports = {
    getAll: (options, callback) => {
        Reminder.find(options)
                .sort({ISODate: 'desc'})
                .exec(callback)
    },

    getOne: (reminder_id, callback) => {
        Reminder.findById(reminder_id, callback)
    },

    store: (reminder, callback) => {
        reminder.ISODate = moment(reminder.date + reminder.time, "DD/MM/YYYY HH:mm").toDate();
        (new Reminder(reminder)).save(callback)
    }, 

    update: (reminder_id, reminder, callback) => {
        reminder.ISODate = moment(reminder.date + reminder.time, "DD/MM/YYYY HH:mm").toDate();
        Reminder.findByIdAndUpdate(reminder_id, reminder, callback)
    },

    destroy: (reminder_id, callback) => {
        Reminder.findByIdAndRemove(reminder_id, callback)
    },

    count: (options, callback) => {
        Reminder.count(options, callback)
    }
}



