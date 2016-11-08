let router 			= require('express').Router()
let ChartController = require('../controllers/ChartController')


router.get('/stats/calls/:months/months', (req, res) => {
	ChartController.getCallsByMonth(req.params.months, (err, count) => {
		if (err) res.status(500).json(err)
        else res.status(200).json(count)
	}) 
})

	

module.exports = router