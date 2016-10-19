const Reminder = require('../models/reminder')

module.exports = {
    getAll: (options, callback) => {
        Reminder.find(options, callback)
    },

    getOne: (reminder_id, callback) => {
        Reminder.findById(reminder_id, callback)
    },

    store: (reminder, callback) => {
        (new Reminder(reminder)).save(callback)
    }, 

    update: (reminder_id, fields, callback) => {
        Reminder.findByIdAndUpdate(reminder_id, fields, callback)
    },

    destroy: (reminder_id, callback) => {
        Reminder.findByIdAndRemove(reminder_id, callback)
    },

    count: (options, callback) => {
        Reminder.count(options, callback)
    }
}



