const router            = require('express').Router()
const validate          = require('express-validation');
const async             = require('async')
const validator         = require('./validators');
const SocketIOEventEmitter      = require('../lib/SocketIOEventEmitter')

const CallController    = require('../controllers/CallController')
const Workshop          = require('../models/workshop')
const Ticket            = require('../models/ticket')

router.get('/calls', (req, res) => { 
    CallController.getAll(req.query, (err, calls) => {
        if (err) res.status(500).json(err)
        else res.status(200).json(calls)
    })
})

router.get('/calls/count', (req, res) => { 
    CallController.count(req.query, (err, calls) => {
        if (err) res.status(500).json(err)
        else res.status(200).json(calls)
    })
})
    
router.get('/calls/recalculate-workshop', (req, res) => {
    CallController.getAll({
        'isValidated':false, 
        'workshop': { $exists: false }
    }, (err, calls) => {
        if (err){ 
            res.status(500).json(err)
        }
        else{ 
            calls.forEach((call) => {
                CallController.asignWorkshopToCall(call, (x) => {
                   //console.log(x)
                })
            })
            res.status(200).json({})
        }
    })
})

router.get('/calls/:id', (req, res) => {
    CallController.getOne(req.params.id, (err, call) => {
        if (err) res.status(500).json(err)
        else res.status(200).json(call)
    })
})

router.put('/calls/:id', validate(validator.call.optional), (req, res) => {
    CallController.update(req.params.id, req.body, (err) => {
        if (err) res.status(500).json(err)
        else res.status(200).json({})
    })
})

router.delete('/calls/:id', (req, res) => {
    CallController.destroy(req.params.id, (err) => {
        if (err) res.status(500).json(err)
        else res.status(200).json({})
    })  
})


router.post('/calls', validate(validator.call.full), (req, res) =>{
    CallController.store(req.body, (err) => {
        if (err) res.status(500).json(err)
        else res.status(201).json({})
    })
})


module.exports = router;