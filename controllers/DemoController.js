const Demo = require('../models/demo')

module.exports = {

    getAll: function(req, res){
        Demo.find({}, function(err, demos){
            if (err) res.status(400).send(err)
            else res.status(200).json(demos)
        })
    },

    getOne: function(req, res){
        Demo.findById(req.params.id, function(err, demo){
            if (err) res.status(400).send(err)
            else res.status(200).json(demo)
        })
    },

    store: function(req, res){
        let demo = new Demo(req.body)

        demo.save(function(err){
            if (err) res.status(400).send(err)
            else res.status(200).json({})
        });
    }, 

    update: function(req, res){
        Demo.findByIdAndUpdate(req.params.id, req.body,function(err){
            if (err) res.status(400).send(err)
            else res.status(200).json({})
        })
    },

    destroy: function(req, res){
        Demo.findByIdAndRemove(req.params.id, function(err){
            if (err) res.status(400).send(err)
            else res.status(200).json({})
        })
    }

};

