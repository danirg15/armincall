const User = require('../models/user')

module.exports = {

    getAll: function(req, res){
        User.find({}, function(err, calls){
            if (err) res.status(400).send(err)
            else res.status(200).json(calls)
        })
    },

    getOne: function(req, res){
        User.findById(req.params.id, function(err, call){
            if (err) res.status(400).send(err)
            else res.status(200).json(call)
        })
    },

    store: function(req, res){
        let user = new User(req.body)

        user.save(function(err){
            if (err) res.status(400).send(err)
            else res.status(200).json({})
        });
    }, 

    update: function(req, res){
        
    },

    destroy: function(req, res){
        
    }

};

