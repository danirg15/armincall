const User = require('../models/user')

module.exports = {

    getAll: (callback) => {
        User.find({}, callback)
    },

    getOne: (callback) => {
        User.findById(req.params.id, callback)
    },

    store: (user, callback) => {
        (new User(user)).save(callback)
    }, 

    update: (req, res) => {
        
    },

    destroy: (req, res) => {
        
    }

};

