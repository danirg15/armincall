const mongoose = require('mongoose');
const Workshop = require('./workshop')
const SocketIOEventEmitter = require('../events/SocketIOEventEmitter')


const CallSchema = mongoose.Schema({
	callerNumber: 		{ "type": String, "require": true },
	recieverNumber:		{ "type": String, "require": true },
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



//--------------------------------------------
//		Middlewares
//--------------------------------------------

CallSchema.pre('save', function(next) {
	let call = this	

	console.log(call)

	require('../controllers/CallController').asignWorkshopToCall(call, (x) => {
		if(x != null) call.workshop = x
		next()
	})

})


CallSchema.post('save', function(doc) {
	let call = doc

	Workshop.findOne({ _id: call.workshop }, function(err, workshop){		
		if(!err && workshop){
			call.workshop = workshop
		}
		SocketIOEventEmitter.emit('newCall',call)
	})			
})


module.exports = mongoose.model('Call', CallSchema);