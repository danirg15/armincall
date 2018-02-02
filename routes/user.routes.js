let router = require('express').Router()
let UserController = require('../controllers/UserController')
let validate = require('express-validation');
let validator = require('./validators');

router.get('/user', (req, res) => {
	UserController.getOne(req.token_payload.body.user_id, (err, user) => {
		if (err) res.status(500).json(err)
        else res.status(200).json(user)
	})
}) 

router.post('/users', validate(validator.user.full), (req, res) => {
	UserController.store(req.body, (err) => {
		if (err) res.status(500).json(err)
        else res.status(201).json({})
	})	
})


module.exports = router;