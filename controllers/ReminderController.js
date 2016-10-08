const Reminder = require('../models/reminder')


module.exports = {

    getAll: function(req, res){
        Reminder.find({}, function(err, reminders){
            if (err) res.status(400).send(err)
            else res.status(200).json(reminders)
        })
    },

    getOne: function(req, res){
        Reminder.findById(req.params.id, function(err, reminder){
            if (err) res.status(400).send(err)
            else res.status(200).json(reminder)
        })
    },

    store: function(req, res){
        let reminder = new Reminder(req.body)

        reminder.save(function(err){
            if (err) res.status(400).send(err)
            else res.status(200).json({})
        });
    }, 

    update: function(req, res){
        Reminder.findByIdAndUpdate(req.params.id, req.body,function(err){
            if (err) res.status(400).send(err)
            else res.status(200).json({})
        })
    },

    destroy: function(req, res){
        Reminder.findByIdAndRemove(req.params.id, function(err){
            if (err) res.status(400).send(err)
            else res.status(200).json({})
        })
    }

};



