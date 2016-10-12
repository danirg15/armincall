const router = require('express').Router()
const CallController = require('../controllers/CallController')
const Workshop = require('../models/workshop')
const Ticket = require('../models/ticket')
const validate = require('express-validation');
const validator = require('./validators');
const EventEmitter = require('../events/EventEmitter')

router.get('/calls', CallController.getAll)

router.get('/calls/:id', CallController.getOne)

router.post('/calls', validate(validator.call), CallController.store)

router.put('/calls/:id', /*validate(validator.call),*/ CallController.update)

router.delete('/calls/:id', CallController.destroy)


router.get('/calls/events/incomming', function (req, res) {
	let data = {
		'number': req.query.number
	}

	if (!data.number) {
		res.status(400).send('Missing "number" parameter!')
	}
	else{
		Workshop.findOne({'phone': data.number}, function(err, workshop) {
			let filter = {
				'completed': false
			}

            if (!err && workshop) {
            	data['workshop'] = workshop
            	filter['workshop'] = workshop._id

            	Ticket.find({ $and: [filter]}, function(err, tickets){
	            	if (!err && tickets) 
	            		data['tickets'] = tickets

	            	//console.log(data)
	            	EventEmitter.emit('incommingCall', data)
					res.status(200).json({})
	            })
            }
            else{
            	EventEmitter.emit('incommingCall', data)
				res.status(200).json({})
            }

            
		})	
    }
})


module.exports = router;