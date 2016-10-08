let router = require('express').Router()
let ReminderController = require('../controllers/ReminderController')
let validate = require('express-validation');
let validator = require('./validators');


router.get('/reminders', ReminderController.getAll)

router.get('/reminders/:id', ReminderController.getOne)

router.post('/reminders', validate(validator.reminder), ReminderController.store)

router.put('/reminders/:id', validate(validator.reminder),ReminderController.update)

router.delete('/reminders/:id', ReminderController.destroy)

module.exports = router;