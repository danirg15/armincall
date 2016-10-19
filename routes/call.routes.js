const router = require('express').Router()
const CallController = require('../controllers/CallController')
const Workshop = require('../models/workshop')
const Ticket = require('../models/ticket')
const validate = require('express-validation');
const validator = require('./validators');
const EventEmitter = require('../events/EventEmitter')
const async = require('async')

router.get('/calls', CallController.getAll)

router.get('/calls/:id', CallController.getOne)

router.post('/calls', validate(validator.call), CallController.store)

router.put('/calls/:id', /*validate(validator.call),*/ CallController.update)

router.delete('/calls/:id', CallController.destroy)


router.get('/tester', /*validate(validator.incomming),*/ (req, res) => {
    
    console.log("1")

    let data = {
        'number': req.query.number
    }

    async.waterfall([
        function (callback){
            Workshop.findOne({'phone': data.number}, (err, workshop) => {
                callback(err, workshop)
            })    
        },
        function (workshop, callback){
            Ticket.find({ $and: [{'completed': false, 'workshop': workshop._id}]}, (err, tickets) => {
                callback(err, tickets)
            })
        }

    ], function (err, result) {
            if (err) throw err
            //res.status(200).json(result)
    })

	/*Workshop.findOne({'phone': req.query.number}, (err, workshop) => {
        if (!err && workshop) {
        	Ticket.find({ $and: [{'completed': false, 'workshop': workshop._id}]}, (err, tickets) => {
            	
            	EventEmitter.emit('incommingCall', {
            		'number': req.query.number,
            		'workshop': workshop,
            		'tickets': tickets
            	})
				res.status(200).json({})
            })
        }
        else{
        	EventEmitter.emit('incommingCall', data)
			res.status(200).json({})
        }
	})*/	
    
})


module.exports = router;