const Call = require('../models/call')

module.exports = {
    getAll: (options, callback) => {
        Call.find(options).populate('workshop').exec(callback)
    },

    getOne: (call_id, callback) => {
        Call.findById(call_id, callback)
    },

    store: (call, callback) => {
        (new Call(call)).save(callback)
    }, 

    update: (call_id, fields, callback) => {
        Call.findByIdAndUpdate(call_id, fields, callback)
    },

    destroy: (call_id, callback) => {
        Call.findByIdAndRemove(call_id, callback)
    },

    count: (options, callback) => {
        Call.count(options, callback)
    },

    getCountOfMonths: (n_months, callback) => {
        let pipeline = [
            // Get only records created in the last 30 days
            {$match:{
                  "createdAt":{$gt: new Date (Date.now() - 1000*60*60*24*30*n_months)}
            }}, 
            // Get the year, month and day from the createdTimeStamp
            {$project:{
                  //"year":{$year:"$createdAt"}, 
                  "month":{$month:"$createdAt"}//, 
                  //"day": {$dayOfMonth:"$createdAt"}
            }}, 
            // Group by year, month and day and get the count
            {$group:{
                  _id:{month:"$month"}, 
                  "count":{$sum:1},
            }},
            {$group:{
                  _id:{month:"$month"},
                  "counts": {$push: "$count"}
            }},
            
        ]

        Call.aggregate().append(pipeline).exec(callback)
    }

}

