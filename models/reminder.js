const mongoose = require('mongoose');

const ReminderSchema = mongoose.Schema({
		description: 	{ "type": String, "require": true },
		date: 			{ "type": String, "require": true },
		time: 			{ "type": String, "require": true }
});


//--------------------------------------------
//		Middlewares
//--------------------------------------------

// ReminderSchema.post('save', function() {
//   console.log("save cron job");
// });

// ReminderSchema.post('remove', function() {
//   console.log("delete cron job");
// });


module.exports = mongoose.model('Reminder', ReminderSchema);