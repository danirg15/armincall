const Call = require('../models/call')

module.exports = {

    getAll: function(req, res){
        filter = {}

        if(req.query.isValidated)
            filter['isValidated'] = req.query.isValidated

        Call.find(filter).populate('workshop').exec(function(err, calls){
            if (err) res.status(400).send(err)
            else res.status(200).json(calls)
        })
    },

    getOne: function(req, res){
        Call.findById(req.params.id, function(err, call){
            if (err) res.status(400).send(err)
            else res.status(200).json(call)
        })
    },

    store: function(req, res){
        let call = new Call(req.body)

        call.save(function(err){
            if (err) res.status(400).send(err)
            else res.status(200).json({})
        });
    }, 

    update: function(req, res){
        Call.findByIdAndUpdate(req.params.id, req.body,function(err){
            if (err) res.status(400).send(err)
            else res.status(200).json({})
        })
    },

    destroy: function(req, res){
        Call.findByIdAndRemove(req.params.id, function(err){
            if (err) res.status(400).send(err)
            else res.status(200).json({})
        })
    },


    getCountOfMonths: function(n_months, callback){
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

        Call.aggregate().append(pipeline).exec(function(err, docs){
            callback(err, docs)
        })
    }

};

