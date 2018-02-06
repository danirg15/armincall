const router = require('express').Router()
const async = require('async')
const validate 			= require('express-validation');
const validator 		= require('./validators');

const SocketIOEventEmitter = require('../lib/SocketIOEventEmitter')
const CallController = require('../controllers/CallController')
const Call = require('../models/call')
const Workshop = require('../models/workshop')
const Ticket = require('../models/ticket')


router.get('/started', validate(validator.calls_service), (req, res) => {
	let call = new Call()
	call.callId = req.query.callid
	call.extension = req.query.ext
	call.date = Date.now()
	call.status = 'Sin responder' //If answered this value gets updated

	if(req.query.direction == 'inbound') {
		call.callerNumber = req.query.callerid
		call.recieverNumber = process.env.APP_PHONE_NUMBER
	} 
	else if(req.query.direction == 'outbound') {
		call.callerNumber = process.env.APP_PHONE_NUMBER
		call.recieverNumber = req.query.callerid
	}

	async.waterfall([
	    function (callback){
	    	Workshop.findOne({ 'phone': req.query.callerid }, callback)
	    },
	    function (workshop, callback){
	    	if (workshop) {
	    		Ticket.find({ 'workshop': workshop._id }, (err, tickets) => {
	    			callback(err, workshop, tickets)
	    		})
	    	}
	    	else {
	    		callback(null, null, null)
	    	}
	    },
	    function (workshop, tickets, callback){
	    	if (workshop) {
	    		call.workshop = workshop._id 
	    	}
	    	
	    	call.save((err) => {
	    		callback(err, workshop, tickets)
	    	})
	    }
	], function (err, workshop, tickets) {
	    if (err) {
	        res.status(500).json({})
	    }
	    else{
	        res.status(200).json({})

	        let event = {
	        	'number': req.query.callerid,
	        	'workshop': workshop,
	        	'tickets': tickets
	        }

	        SocketIOEventEmitter.emit('incommingCall', event)
	    }
	})

})

router.get('/answered', validate(validator.calls_service), (req, res) => {
	
	Call.update({ 'callId': req.query.callid }, { 
		$set: {'status': 'Respondida'} 
	}, (err, call) => {
		if (err) res.status(500).json(err)
		else res.status(200).json({})
	})

})

router.get('/finished', validate(validator.calls_service), (req, res) => {

    async.waterfall([
        function (callback){
        	Call.findOne({ 'callId': req.query.callid })
        		.populate('workshop')
        		.exec(callback)
        },
        function (call, callback){
        	CallController.update(call._id, {
        		'durationInSeconds': req.query.duration
        	}, (err, data) => {
        		data.workshop = call.workshop
        		callback(err, data)
        	})
        }
    ], function (err, call) {
        if (err) {
            res.status(500).json({})
        }
        else{
            res.status(200).json({})
            SocketIOEventEmitter.emit('newCall', call)
        }
    })

})


module.exports = router



