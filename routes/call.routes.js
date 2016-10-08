let router = require('express').Router()
let CallController = require('../controllers/CallController')
let validate = require('express-validation');
let validator = require('./validators');


router.get('/calls', CallController.getAll)

router.get('/calls/:id', CallController.getOne)

router.post('/calls', validate(validator.call), CallController.store)

router.put('/calls/:id', validate(validator.call), CallController.update)

router.delete('/calls/:id', CallController.destroy)

module.exports = router;