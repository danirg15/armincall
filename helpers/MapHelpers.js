const request = require('request');

module.exports = {

    geocode: function (address, callback){
        let url = 'http://maps.google.com/maps/api/geocode/json?address='

        request(url+address, function (error, response, body) {
            var body = JSON.parse(body)

            if (!error && response.statusCode == 200 && body.status=="OK") {
                let location = body.results[0].geometry.location;
                callback(error, location)
            }
            else{
                callback(error)
            }
        })
    }

}