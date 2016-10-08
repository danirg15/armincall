var mongoose = require('mongoose');


module.exports.connect = function(){
    
    mongoose.connect(process.env.MONGODB_URI, function(err) {
        if (err) throw err;
        console.log('Connected to db');
    });

}

