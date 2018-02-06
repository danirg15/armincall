const mongoose = require('mongoose');
const Workshop = require('./workshop')

const CallSchema = mongoose.Schema({
	callId: 			{ "type": String, "require": true },
	extension: 			{ "type": Number, "require": false },
	callerNumber: 		{ "type": String, "require": true },
	recieverNumber:		{ "type": String, "require": true },
	date: 				{ "type": Date, "require": true },
	durationInSeconds:	{ "type": Number, "default": 0, "require": true },
	status: 			{ "type": String, "require": true },
	isValidated: 		{ "type": Boolean, "default": false},
	workshop: 			{ "type": mongoose.Schema.Types.ObjectId, "ref": 'Workshop' }
}, 
{ 
	timestamps: true
}
)

CallSchema.index({ "callId": 1 })


//--------------------------------------------
//		Middlewares
//--------------------------------------------

// CallSchema.pre('save', function(next) {

// })

// CallSchema.post('save', function(doc) {
		
// })


module.exports = mongoose.model('Call', CallSchema);