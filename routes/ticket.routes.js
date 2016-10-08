let router = require('express').Router()
let TicketController = require('../controllers/TicketController')
let validate = require('express-validation');
let validator = require('./validators');


router.get('/tickets', TicketController.getAll)

router.get('/tickets/:id', TicketController.getOne)

router.post('/tickets', validate(validator.ticket), TicketController.store)

router.put('/tickets/:id', validate(validator.ticket),TicketController.update)

router.delete('/tickets/:id', TicketController.destroy)

module.exports = router;