var request = require('request');

module.exports.geocode = function(address, callback){
	var url = 'http://maps.google.com/maps/api/geocode/json?address='

	request(url+address, function (error, response, body) {
		if (!error && response.statusCode == 200) {
		    var obj = JSON.parse(body)
		    var location = obj.results[0].geometry.location
		    
			callback(error, location)
		}
		else{
			callback(error)
		}
	})
}


