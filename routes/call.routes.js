const router            = require('express').Router()
const validate          = require('express-validation');
const async             = require('async')
const validator         = require('./validators');
const SocketIOEventEmitter      = require('../events/SocketIOEventEmitter')

const CallController    = require('../controllers/CallController')
const Workshop          = require('../models/workshop')
const Ticket            = require('../models/ticket')


const checkPermsForRoute = require('../middleware/permissions')

router.get('/calls', checkPermsForRoute('CALLS_ALL'), (req, res) => {
    let limit = req.query.limit || 100
    CallController.getAll(req.query, limit, (err, calls) => {
        if (err) res.status(500).json(err)
        else res.status(200).json(calls)
    })
})
    
router.get('/calls/:id', checkPermsForRoute('CALLS_SHOW'), (req, res) => {
    CallController.getOne(req.params.id, (err, call) => {
        if (err) res.status(500).json(err)
        else res.status(200).json(call)
    })
})

router.post('/calls', 
        [
            checkPermsForRoute('CALLS_CREATE'),
            validate(validator.call.full)
        ], (req, res) =>{
    
    CallController.store(req.body, (err) => {
        if (err) res.status(500).json(err)
        else res.status(201).json({})
    })
})

router.put('/calls/:id', 
            [
                checkPermsForRoute('CALLS_EDIT'), 
                validate(validator.call.optional)
            ], (req, res) => {

    CallController.update(req.params.id, req.body, (err) => {
        if (err) res.status(500).json(err)
        else res.status(200).json({})
    })
})

router.delete('/calls/:id', checkPermsForRoute('CALLS_DELETE'), (req, res) => {
    CallController.destroy(req.params.id, (err) => {
        if (err) res.status(500).json(err)
        else res.status(200).json({})
    })  
})

router.post('/calls/emit/incomming', 
            [
                checkPermsForRoute('CALLS_EMIT_INCOMMING'), 
                validate(validator.incomming)
            ], (req, res) => {
    
    let data = {
        'number': req.body.number
    }

    async.waterfall([
        function (callback){
            Workshop.findOne({'phone': data.number}, (err, workshop) => {
                callback(err, workshop)
            })    
        },
        function (workshop, callback){
            if(workshop){
                Ticket.find({ $and: [{'completed': false, 'workshop': workshop._id}]}, (err, tickets) => {
                    callback(err, {workshop, tickets, number: data.number})
                })
            }
            else{
                callback(null, {number: data.number})
            }
        }

    ], function (err, result) {
            if (err) throw err
                console.log('incomming call routes')
            SocketIOEventEmitter.emit('incommingCall', result)
            res.status(200).json({})
    })	

})


module.exports = router;