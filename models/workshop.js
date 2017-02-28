const mongoose = require('mongoose');
const MapHelpers = require('../helpers/MapHelpers')
const Algolia = require('../lib/Algolia').init('workshops')


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
WorkshopSchema.index({ "name": 1 });
//WorkshopSchema.index({ "distributor": 'text' });
//WorkshopSchema.index({ "phone": 1 });


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

WorkshopSchema.post('save', function(workshop) {
	Algolia.add({
		'objectID': 	workshop._id,
		'name': 		workshop.name,
		'cif': 			workshop.cif,
		'distributor': 	workshop.distributor,
		'phone': 		workshop.phone,
		'contact': 		workshop.contact
	}, (err) => {
		if (err) throw err
	})
})


module.exports = mongoose.model('Workshop', WorkshopSchema);