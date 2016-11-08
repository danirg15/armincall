const router 				= require('express').Router()
const ReminderController 	= require('../controllers/ReminderController')
const validate 				= require('express-validation');
const validator 			= require('./validators');


router.get('/reminders', (req, res) => {
	ReminderController.getAll(req.query, (err, reminders) => {
		if (err) res.status(500).json(err)
        else res.status(200).json(reminders)
	})	
})

router.get('/reminders/:id', (req, res) => {
	ReminderController.getOne(req.params.id, (err, reminder) => {
		if (err) res.status(500).json(err)
        else res.status(200).json(reminder)
	})	
})

router.post('/reminders', validate(validator.reminder), (req, res) => {
	ReminderController.store(req.body, (err) => {
		if (err) res.status(500).json(err)
        else res.status(201).json({})
	})	
})

router.put('/reminders/:id', validate(validator.reminder), (req, res) => {
	ReminderController.update(req.params.id, req.body, (err) => {
		if (err) res.status(500).json(err)
        else res.status(200).json({})
	})	
})

router.delete('/reminders/:id', (req, res) => {
	ReminderController.destroy(req.params.id, (err) => {
		if (err) res.status(500).json(err)
        else res.status(200).json({})
	})	
})

module.exports = router;