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

    getNumberOfCallsByMonth: (nMonths, callback) => {
        let pipeline = [
            // Get only records created in the last 30 days
            {$match:{
                  "date":{$gt: new Date (Date.now() - 1000*60*60*24*31*nMonths)}
            }}, 
            // Get the year, month and day from the createdTimeStamp
            {$project:{
                  "year":{$year:"$date"}, 
                  "month":{$month:"$date"}//, 
            }}, 

            {$group:{
                  _id:{year: "$year", month: "$month"}, 
                  "count":{$sum:1}
            }},

            {$sort: { _id: 1 }},

            {$limit: Number(nMonths)}

        ]

        Call.aggregate().append(pipeline).exec(callback)
    }

}

