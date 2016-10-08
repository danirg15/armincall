const mongoose = require('mongoose');

const DemoSchema = mongoose.Schema({
	name: 			{"type": String, "require": true},
	distributor: 	{"type": String, "require": true},
	licence: 		{"type": String},
	contact: 		{"type": String},
	phone: 			{"type": String, "require": true},
	description:	{"type": String},
	date: 			{"type": String, "require": true},
	time: 			{"type": String, "require": true}
});

module.exports = mongoose.model('Demo', DemoSchema);


