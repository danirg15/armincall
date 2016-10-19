const Demo = require('../models/demo')

module.exports = {
    getAll: (options, callback) => {
        Demo.find(options, callback)
    },

    getOne: (demo_id, callback) => {
        Demo.findById(demo_id, callback)
    },

    store: (demo, callback) => {
        (new Demo(demo)).save(callback);
    }, 

    update: (demo_id, fields, callback) => {
        Demo.findByIdAndUpdate(demo_id, fields, callback)
    },

    destroy: (demo_id, callback) => {
        Demo.findByIdAndRemove(demo_id, callback)
    },

    count: (options, callback) => {
        Demo.count(options, callback)
    }
}

