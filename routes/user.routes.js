let router = require('express').Router()
let UserController = require('../controllers/UserController')
let validate = require('express-validation');
let validator = require('./validators');


// router.get('/users', UserController.getAll)

// router.get('/users/:id', UserController.getOne)

// router.post('/users', UserController.store)


module.exports = router;