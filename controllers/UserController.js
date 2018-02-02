const User = require('../models/user')

module.exports = {

    getAll: (callback) => {
        User.find({}, callback)
    },

    getOne: (id, callback) => {
        User.findById(id).select('-password').exec(callback)
    },

    store: (user, callback) => {
        (new User(user)).save(callback)
    }, 

    update: (req, res) => {
        
    },

    destroy: (req, res) => {
        
    }

};

