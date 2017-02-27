const Workshop  = require('../models/workshop')
const Algolia   = require('../lib/Algolia').init('workshops')

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
    }, 

    update: (workshop_id, fields, callback) => {
        Workshop.findByIdAndUpdate(workshop_id, fields, callback)
    },

    destroy: (workshop_id, callback) => {
        Workshop.findByIdAndRemove(workshop_id, callback)
    },

    search: (keyword, callback) => {
        Workshop.find({ $or: [
                            
                        {$text: {$search: keyword}}, 
                        {phone: keyword}
                        
                     ]}).exec(callback)
    }

    // search: (keyword, callback) => {
    //     Algolia.search(keyword, callback)
    // }

}



