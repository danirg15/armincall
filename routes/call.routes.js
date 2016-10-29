const router            = require('express').Router()
const validate          = require('express-validation');
const async             = require('async')
const validator         = require('./validators');
const SocketIOEventEmitter      = require('../events/SocketIOEventEmitter')

const CallController    = require('../controllers/CallController')
const Workshop          = require('../models/workshop')
const Ticket            = require('../models/ticket')


router.get('/calls', (req, res) => {
    CallController.getAll(req.query, (err, calls) => {
        if (err) res.status(500).json(err)
        else res.status(200).json(calls)
    })
})
    
router.get('/calls/:id', (req, res) => {
    CallController.getOne(req.params.id, (err, call) => {
        if (err) res.status(500).json(err)
        else res.status(200).json(call)
    })
})

router.post('/calls', validate(validator.call.full), (req, res) =>{
    CallController.store(req.body, (err) => {
        if (err) res.status(500).json(err)
        else res.status(201).json({})
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

router.get('/calls/emit/incomming', /*validate(validator.incomming),*/ (req, res) => {
    let data = {
        'number': req.query.number
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
                    callback(err, {workshop, tickets})
                })
            }
            else{
                callback(null, null)
            }
        }

    ], function (err, result) {
            if (err) throw err
            SocketIOEventEmitter.emit('incommingCall', result)
            res.status(200).json({})
    })	

})


module.exports = router;