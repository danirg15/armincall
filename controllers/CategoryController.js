const Category = require('../models/category')

module.exports = {
    getAll: (options, callback) => {
        Category.find(options)
                .sort({name: 'asc'})
                .exec(callback)
    },

    getOne: (category_id, callback) => {
        Category.findById(category_id, callback)
    },

    store: (category, callback) => {
        (new Category(category)).save(callback)
    }, 

    update: (category_id, fields, callback) => {
        Category.findByIdAndUpdate(category_id, fields, callback)
    },

    destroy: (category_id, callback) => {
        Category.findByIdAndRemove(category_id, callback)
    },

    count: (options, callback) => {
        Category.count(options, callback)
    }
}



