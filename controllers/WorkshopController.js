const Workshop  = require('../models/workshop')
const AlgoliaInterface   = require('../lib/AlgoliaInterface').init('workshops')

let self = module.exports = {

    getAll: (options, callback) => {
        if(options.q)
            self.search(options.q, callback)
        else
            Workshop.find(options, callback)
    },

    getOne: (workshop_id, callback) => {
        Workshop.findById(workshop_id, callback)
    },

    store: (workshop, callback) => {
        (new Workshop(workshop)).save(callback)
        
        AlgoliaInterface.add({
            'objectID':     workshop._id,
            'name':         workshop.name,
            'cif':          workshop.cif,
            'distributor':  workshop.distributor,
            'phone':        workshop.phone,
            'contact':      workshop.contact
        }, () => {})
    }, 

    update: (workshop_id, fields, callback) => {
        Workshop.findByIdAndUpdate(workshop_id, fields, callback)
    },

    destroy: (workshop_id, callback) => {
        Workshop.findByIdAndRemove(workshop_id, callback)
    },

    search: (keyword, callback) => {
        Workshop.find({ 'name': keyword }).exec(callback)
    },

    syncAlgolia: (callback) => {
        AlgoliaInterface.clearIndex()

        Workshop.find({}, (err, workshops) => {
            workshops.forEach((workshop) => {
                AlgoliaInterface.add({
                    'objectID':     workshop._id,
                    'name':         workshop.name,
                    'cif':          workshop.cif,
                    'distributor':  workshop.distributor,
                    'phone':        workshop.phone,
                    'contact':      workshop.contact
                }, (err) => {
                    if (err) callback(err)
                })
            })//foreach
            callback({})
        })//find
    }   
}




