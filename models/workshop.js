const mongoose = require('mongoose');
const GoogleMapsInterface = require('../lib/GoogleMapsInterface')
const AlgoliaInterface = require('../lib/AlgoliaInterface').init('workshops')


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
	email: 			{"type": String},
	phone: 			[{"type": String}],
	licence: 		[{"type": String}],
	previous_dms: 	{"type": String},
	current_dms: 	{"type": String}
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
		GoogleMapsInterface.geocode(this.address.description, function(err, location){
			if(!err) {
				workshop.address.location = location
			}
		})
	}

	next()
})

WorkshopSchema.post('save', function(workshop) {
	AlgoliaInterface.add({
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