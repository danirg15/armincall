const Demo = require('../models/demo')
const moment = require('moment')

module.exports = {
    getAll: (options, callback) => {
        Demo.find(options)
            .sort({ISODate: 'desc'})
            .populate('owner', 'name')
            .exec(callback)
    },

    getOne: (demo_id, callback) => {
        Demo.findById(demo_id, callback)
    },

    store: (demo, callback) => {
        if(demo.date && demo.time) {
            demo.ISODate = moment(demo.date + demo.time, "DD/MM/YYYY HH:mm").toDate();
        }
        (new Demo(demo)).save(callback);
    }, 

    update: (demo_id, demo, callback) => {
        if (demo.date && demo.time) {
            demo.ISODate = moment(demo.date + demo.time, "DD/MM/YYYY HH:mm").toDate();
        }
        Demo.findByIdAndUpdate(demo_id, demo, callback)
    },

    destroy: (demo_id, callback) => {
        Demo.findByIdAndRemove(demo_id, callback)
    },

    count: (options, callback) => {
        Demo.count(options, callback)
    }
}

