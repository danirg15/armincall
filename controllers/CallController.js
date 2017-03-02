const Call = require('../models/call')
const Workshop = require('../models/workshop')

let self = module.exports = {
    getAll: (options, callback) => {
        Call.find(options)
            .limit(400)
            .sort({date: 'desc'})
            .populate('workshop').exec(callback)
    },

    getOne: (call_id, callback) => {
        Call.findById(call_id, callback)
    },

    store: (call, callback) => {
        (new Call(call)).save(callback)
    }, 

    update: (call_id, fields, callback) => {
        Call.findByIdAndUpdate(call_id, fields, callback)
    },

    destroy: (call_id, callback) => {
        Call.findByIdAndRemove(call_id, callback)
    },

    count: (options, callback) => {
        Call.count(options, callback)
    },


    asignWorkshopToCall: (call, callback) => {
        let armin_phone = process.env.APP_PHONE_NUMBER
        let phone = (armin_phone == call.callerNumber) ? call.recieverNumber : call.callerNumber

        Workshop.findOne({ 'phone': phone }, function(err, workshop){
            if(!err && workshop) {
                self.update(call._id, { $set:{'workshop': workshop._id} }, (err) => {
                    if(err) throw err
                })
                callback(workshop._id)
            }
            else {
                callback(null)
            }
        })
    }

}

