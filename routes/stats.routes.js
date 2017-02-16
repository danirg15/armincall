let router 			= require('express').Router()
let ChartController = require('../controllers/ChartController')
let Call 	= require('../models/call')

router.get('/stats/calls/:months/months', (req, res) => {
	ChartController.getCallsByMonth(req.params.months, (err, count) => {
		if (err) res.status(500).json(err)
        else res.status(200).json(count)
	}) 
})

router.get('/stats/calls/avg_time', (req, res) => {
	 let pipeline = [
        // Get only records created in the last 31 days
        {$match:{
              "date":{$gt: new Date (Date.now() - 1000*60*60*24*31*1)},
              "status": "Respondida",
        }}, 

        // Get the year, month and day from the createdTimeStamp
        {$project:{
        	  "day": 	{ $dayOfMonth:"$date" },
              "year": 	{ $year:"$date" }, 
              "month":  { $month:"$date" },
              "duration": "$durationInSeconds"
        }}, 

        {$group:{
              _id: { day: "$day", month: "$month", year: "$year" }, 
              avg: { $avg: "$duration" }
        }},

        {$sort: { _id: 1 }},

        {$limit: 13}
    ]

    Call.aggregate().append(pipeline).exec((err, data) => {
    	if (err) res.json(err)
    	else res.json(data)
    })
})

	

module.exports = router