let router = require('express').Router()
let WorkshopController = require('../controllers/WorkshopController')
let validate = require('express-validation');
let validator = require('./validators');


router.get('/workshops', WorkshopController.getAll)

router.get('/workshops/:id', WorkshopController.getOne)

router.post('/workshops', validate(validator.workshop), WorkshopController.store)

router.put('/workshops/:id', validate(validator.workshop),WorkshopController.update)

router.delete('/workshops/:id', WorkshopController.destroy)

module.exports = router;