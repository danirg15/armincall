let router 			= require('express').Router()
let ChartController = require('../controllers/ChartController')
let Call 	= require('../models/call')
const moment = require('moment')

router.get('/stats/calls/evolution_by_months/:n_months', (req, res) => {
    ChartController.getCallsEvolutionByMonth(req.params.n_months, (err, data) => {
        if (err) res.status(500).json(err)
        else res.status(200).json(data)
    }) 
})

router.get('/stats/calls/avg_time/this/:time_word', (req, res) => {
    const valid_time_words = ['day', 'week', 'month', 'year']

    if (valid_time_words.indexOf(req.params.time_word) != -1) {
        ChartController.getCallsAvgTime(req.params.time_word, (err, data) => {
            if (err) res.status(500).json(err)
            else res.status(200).json(data)
        })
    }
    else {
        res.status(500).json({'error': 'Invalid time word'})
    }
})

router.get('/stats/calls/count/this/:time_word', (req, res) => {
    const valid_time_words = ['day', 'week', 'month', 'year']

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


router.get('/stats/calls/count/week/histogram', (req, res) => {
    ChartController.getCallsCountWeekHistogram((err, data) => {
        if (err) res.status(500).json(err)
        else res.status(200).json(data)
    })
})

router.get('/stats/calls/count/hour/histogram', (req, res) => {
    ChartController.getCallsCountHourHistogram((err, data) => {
        if (err) res.status(500).json(err)
        else res.status(200).json(data)
    })
})


// router.get('/stats/calls/avg_time/week/histogram', (req, res) => {    
//     ChartController.getCallsAvgTimeWeekHistogram((err, data) => {
//         if (err) res.status(500).json(err)
//         else res.status(200).json(data)
//     })
// })



module.exports = router