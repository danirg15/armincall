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
	let new_call = new Call()
	new_call.callId = req.query.callid
	new_call.extension = req.query.ext
	new_call.date = Date.now()
	new_call.status = 'Sin responder' //If answered this value gets updated

	if(req.query.direction == 'inbound') {
		new_call.callerNumber = req.query.callerid
		new_call.recieverNumber = process.env.APP_PHONE_NUMBER
	} 
	else if(req.query.direction == 'outbound') {
		new_call.callerNumber = process.env.APP_PHONE_NUMBER
		new_call.recieverNumber = req.query.callerid
	}

	async.waterfall([
		//1. Try to find a workhop for the phone number and assign to call
	    function (callback){
	    	Workshop.findOne({ 'phone': req.query.callerid }, (err, workshop) => {
	    		if (workshop) {
	    			new_call.workshop = workshop._id 
	    		}
	    		callback(err, workshop)
	    	})
	    },
	    //2. Find the open tickets for the workshop
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
	    //3. Save the call if it's new
	    function (workshop, tickets, callback){
	    	
	    	Call.findOne({'callid': req.query.callid}, (err, call) => {
	    		if(!call) {
	    			new_call.save((err) => {
	    				callback(err, workshop, tickets)
	    			})
	    		}
	    		else {
	    			callback(err, workshop, tickets)
	    		}
	    	})

	    }
	], function (err, workshop, tickets) {
	    if (err) {
	        res.status(500).json({})
	    }
	    else{
	        res.status(200).json({})

	        if(req.query.direction == 'inbound') {
	        	SocketIOEventEmitter.emit('incommingCall', {
	        		'number': req.query.callerid,
	        		'workshop': workshop,
	        		'tickets': tickets
	        	})
	        }
	        
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



