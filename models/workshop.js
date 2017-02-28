const mongoose = require('mongoose');
const MapHelpers = require('../helpers/MapHelpers')

const WorkshopSchema = mongoose.Schema({
	name: 		{"type": String, "require": true},
	cif: 		{"type": String},
	contact: 	String,
	address: {
		description: String,
		location: {
			lat: String,
			lng: String
		}
	},
	distributor: 	{"type": String, "require": true},
	email: 			String,
	phone: 			[String],
	licence: 		[{"type": String}],
},
{ 
	timestamps: true
}
);

//--------------------------------------------
//		Indexes
//--------------------------------------------
WorkshopSchema.index({ "name": 'text' });
WorkshopSchema.index({ "distributor": 'text' });
WorkshopSchema.index({ "phone": 1 });


//--------------------------------------------
//		Middlewares
//--------------------------------------------

WorkshopSchema.pre('save', function(next) {
	let workshop = this
	
	if(this.address.description) {
		MapHelpers.geocode(this.address.description, function(err, location){
			if(!err) {
				workshop.address.location = location
			}
		})
	}

	next()
})


module.exports = mongoose.model('Workshop', WorkshopSchema);