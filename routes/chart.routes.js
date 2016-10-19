let router 			= require('express').Router()
let ChartController = require('../controllers/ChartController')


router.get('/charts/months/:months', ChartController.getCallsCountOfMonths)

module.exports = router