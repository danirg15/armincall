const axios = require('axios')

module.exports = {

    geocode: function (address, callback){
        let url = 'http://maps.google.com/maps/api/geocode/json'

        axios.get(url, {
            params: {
              'address': address
            }
        })
        .then(function (response) {
            callback(error, response.data.results[0].geometry.location)
        })
        .catch(function (error) {
            callback(error)
        })
    }

}