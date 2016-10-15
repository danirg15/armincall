const mongoose = require('mongoose');
const Workshop = require('./workshop')
const EventEmitter = require('../events/EventEmitter')


const CallSchema = mongoose.Schema({
	caller_number: 		{ "type": String, "require": true },
	reciever_number:	{ "type": String, "require": true },
	date: 				{ "type": Date, "require": true },
	durationInSeconds:	{ "type": Number, "require": true },
	status: 			{ "type": String, "require": true },
	isValidated: 		{ "type": Boolean, "default": false},
	workshop: 			{ "type": mongoose.Schema.Types.ObjectId, "ref": 'Workshop' }
}, 
{ 
	timestamps: true
}
)


CallSchema.statics.getAll(options, callback){
	this.find(options).populate('workshop').exec(callback)
}



//--------------------------------------------
//		Middlewares
//--------------------------------------------

CallSchema.pre('save', function(next) {
	let call = this	

	//Try to identify to the caller
	Workshop.findOne({ phone: call.caller_number }, function(err, workshop){
		if(!err && workshop) {
			call.workshop = workshop._id
			next()
		}
		else{
			next(err)
		}
	})
	
})


CallSchema.post('save', function(doc) {
	let call = doc

	Workshop.findOne({ _id: call.workshop }, function(err, workshop){		
		if(!err && workshop)
			call.workshop = workshop

		EventEmitter.emit('newCall',call)
	})		
	
})


module.exports = mongoose.model('Call', CallSchema);