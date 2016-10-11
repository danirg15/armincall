const router = require('express').Router()
const CallController = require('../controllers/CallController')
const Workshop = require('../models/workshop')
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
            if (!err && workshop) 
            	data['workshop'] = workshop
            
            console.log(data)
            EventEmitter.emit('incommingCall', data)
			res.status(200).json({})
		})	
    }
})


module.exports = router;