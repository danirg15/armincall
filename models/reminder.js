const mongoose	= require('mongoose')

const ReminderSchema = mongoose.Schema({
	description: 	{ "type": String, "require": true },
	date: 			{ "type": String, "require": true },
	time: 			{ "type": String, "require": true },
	ISODate:		{ "type": Date, "require": true },
	notified: 		{"type": Boolean, "default": false}
})


//--------------------------------------------
//		Middlewares
//--------------------------------------------


module.exports = mongoose.model('Reminder', ReminderSchema);