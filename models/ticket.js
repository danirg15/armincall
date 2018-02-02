const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
	owner: 			{"type": mongoose.Schema.Types.ObjectId, "ref": "User"},
	workshop: 		{ "type": mongoose.Schema.Types.ObjectId, "ref": 'Workshop' },
	category: 		String,
	description: 	String,
	solution: 		String,
	calls: 			[{ "type": mongoose.Schema.Types.ObjectId, "ref": 'Call' }],
	completed: 		{ "type": Boolean, "require": true, "default": false}
},
{ 
	timestamps: true
}
);





module.exports = mongoose.model('Ticket', TicketSchema);