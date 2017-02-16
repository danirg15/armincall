let router 			= require('express').Router()
let ChartController = require('../controllers/ChartController')


router.get('/stats/calls/:months/months', (req, res) => {
	ChartController.getCallsByMonth(req.params.months, (err, count) => {
		if (err) res.status(500).json(err)
        else res.status(200).json(count)
	}) 
})

router.get('/stats/calls/count', (req, res) => {
	
})

router.get('/stats/calls/avg_time', (req, res) => {
	
})

	

module.exports = router