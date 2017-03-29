const mongoose 	= require('mongoose');

const DemoSchema = mongoose.Schema({
	workshop_name: 			{"type": String, "require": true},
	distributor: 	{"type": String, "require": true},
	licence: 		{"type": String},
	contact: 		{"type": String},
	phone: 			{"type": String, "require": true},
	description:	{"type": String},
	date: 			{"type": String, "require": true},
	time: 			{"type": String, "require": true},
	comments: 		{"type": String},
	ISODate: 		{"type": Date, 	 "require": true},
	completed: 		{"type": Boolean, "default": false},
	notified: 		{"type": Boolean, "default": false},
})


//--------------------------------------------
//		Middlewares
//--------------------------------------------


module.exports = mongoose.model('Demo', DemoSchema);


