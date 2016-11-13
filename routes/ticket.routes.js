const router 			= require('express').Router()
const TicketController 	= require('../controllers/TicketController')
const validate 			= require('express-validation');
const validator 		= require('./validators');


router.get('/tickets', (req, res) => {
	TicketController.getAll(req.query, (err, tickets) => {
		if (err) res.status(500).json(err)
        else res.status(200).json(tickets)
	})	
})

router.get('/tickets/:id', (req, res) => {
	TicketController.getOne(req.params.id, (err, ticket) => {
		if (err) res.status(500).json(err)
        else res.status(200).json(ticket)
	})
}) 

router.post('/tickets', validate(validator.ticket.full), (req, res) => {
	console.log(req.body)
	TicketController.store(req.body, (err) => {
		if (err) res.status(500).json(err)
        else res.status(201).json({})
	})
})

router.put('/tickets/:id', validate(validator.ticket.optional), (req, res) => {
	console.log(req.body)
	TicketController.update(req.params.id, req.body, (err) => {
		if (err) res.status(500).json(err)
        else res.status(200).json({})
	})	
})

router.delete('/tickets/:id', (req, res) => {
	TicketController.destroy(req.params.id, (err) => {
		if (err) res.status(500).json(err)
        else res.status(200).json({})
	})
})

module.exports = router



