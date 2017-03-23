const mongoose	= require('mongoose')
const moment 	= require('moment')

const ReminderSchema = mongoose.Schema({
	description: 	{ "type": String, "require": true },
	date: 			{ "type": String, "require": true },
	time: 			{ "type": String, "require": true },
	ISODate:		{ "type": Date, "require": true },
})


//--------------------------------------------
//		Middlewares
//--------------------------------------------

ReminderSchema.pre('save', function(next) {
	this.ISODate = moment(this.date + this.time, "DD/MM/YYYY HH:mm").toDate()
	next()
});

// ReminderSchema.post('remove', function() {
//   console.log("delete cron job");
// });


module.exports = mongoose.model('Reminder', ReminderSchema);