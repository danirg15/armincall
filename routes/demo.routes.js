let router = require('express').Router()
let DemoController = require('../controllers/DemoController')
let validate = require('express-validation');
let validator = require('./validators');


router.get('/demos', DemoController.getAll)

router.get('/demos/:id', DemoController.getOne)

router.post('/demos', validate(validator.demo), DemoController.store)

router.put('/demos/:id', validate(validator.demo),DemoController.update)

router.delete('/demos/:id', DemoController.destroy)

module.exports = router;