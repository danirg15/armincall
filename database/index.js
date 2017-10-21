const mongoose = require('mongoose');


module.exports.connect = function(uri){

    mongoose.connect(uri, { 'useMongoClient': true }, function(err) {
        if (err) throw err
        console.log('Connected to DB: '+uri)
    })
    
}

