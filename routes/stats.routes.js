let router 			  = require('express').Router()
let ChartController   = require('../controllers/ChartController')
let Call 	          = require('../models/call')
const moment          = require('moment')
const valid_time_words = ['day', 'week', 'month', 'year', 'all']

router.get('/stats/calls/evolution_by_months/:n_months', (req, res) => {
    ChartController.getCallsEvolutionByMonth(req.params.n_months, (err, data) => {
        if (err) res.status(500).json(err)
        else res.status(200).json(data)
    }) 
})

router.get('/stats/calls/avg_time/this/:time_word', (req, res) => {
    if (valid_time_words.indexOf(req.params.time_word) != -1) {
        ChartController.getCallsAvgTime(req.params.time_word, (err, data) => {
            if (err) res.status(500).json(err)
            else res.status(200).json(data)
        })
    }
    else {
        res.status(400).json({'error': 'Invalid time word'})
    }
})

router.get('/stats/calls/count/this/:time_word', (req, res) => {
    if (valid_time_words.indexOf(req.params.time_word) != -1) {
        ChartController.getCallsCount(req.params.time_word, (err, data) => {
            if (err) res.status(500).json(err)
            else res.status(200).json(data)
        })
    }
    else {
        res.status(500).json({'error': 'Invalid time word'})
    }
})


router.get('/stats/calls/count/daily/histogram/:time_word', (req, res) => {
    if (valid_time_words.indexOf(req.params.time_word) != -1) {
        ChartController.getCallsCountWeekHistogram(req.params.time_word, (err, data) => {
            if (err) res.status(500).json(err)
            else res.status(200).json(data)
        })
    }
    else {
        res.status(500).json({'error': 'Invalid time word'})
    }
})

router.get('/stats/calls/count/hourly/histogram/:time_word', (req, res) => {
    if (valid_time_words.indexOf(req.params.time_word) != -1) {
        ChartController.getCallsCountHourHistogram(req.params.time_word, (err, data) => {
            if (err) res.status(500).json(err)
            else res.status(200).json(data)
        })
    }
    else {
        res.status(500).json({'error': 'Invalid time word'})
    }
})



module.exports = router