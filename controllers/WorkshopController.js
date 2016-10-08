const Workshop = require('../models/workshop')

module.exports = {

    getAll: function(req, res){
        if(req.query.q){
            module.exports.search(req, res)
        }
        else{
            Workshop.find({}, function(err, workshops){
                if (err) res.status(400).send(err)
                else res.status(200).json(workshops)
            })
        }
    },

    getOne: function(req, res){
        Workshop.findById(req.params.id, function(err, workshop){
            if (err) res.status(400).send(err)
            else res.status(200).json(workshop)
        })
    },

    store: function(req, res){
        let workshop = new Workshop(req.body)

        workshop.save(function(err){
            if (err) res.status(400).send(err)
            else res.status(200).json({})
        });
    }, 

    update: function(req, res){
        Workshop.findByIdAndUpdate(req.params.id, req.body,function(err){
            if (err) res.status(400).send(err);
            else res.status(200).json({});
        })
    },

    destroy: function(req, res){
        Workshop.findByIdAndRemove(req.params.id, function(err){
            if (err) res.status(400).send(err)
            else res.status(200).json({})
        })
    },

    search: function(req, res){
        let q = req.query.q || ''
        
        Workshop.find(
                { $or: [
                    {$text: {$search: q}}, 
                    {phone: q}
                ]})
                .exec(function(err, workshops) {
                    if (err) res.status(400).send(err);
                    else res.status(200).json(workshops);
		})
    }


};



