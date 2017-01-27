const mongoose = require('mongoose');
//const Call = require('./call')

const TicketSchema = mongoose.Schema({
	workshop: 		{ "type": mongoose.Schema.Types.ObjectId, "ref": 'Workshop' },
	description: 	String,
	category: 		String,
	calls: 			[{ "type": mongoose.Schema.Types.ObjectId, "ref": 'Call' }],
	completed: 		{ "type": Boolean, "require": true, "default": false}
},
{ 
	timestamps: true
}
);





module.exports = mongoose.model('Ticket', TicketSchema);