const router 			= require('express').Router()
const AuthController 	= require('../controllers/AuthController')
const UserController 	= require('../controllers/UserController')
const validate 			= require('express-validation');
const validator 		= require('./validators');

router.post('/auth/login', validate(validator.auth.full), (req, res) => {
	AuthController.login(req.body.username, req.body.password, (err, token) => {
		if (token && !err) {
			res.status(200).json({ 
				'message': 'Successful login',
				'token': token 
			})
		}
		else{
			res.status(401).json({ 
				'message': 'Auth failed'
			})
		}
	})
})

router.post('/auth/register', validate(validator.user.full), (req, res) => {
	UserController.store(req.body, (err) => {
		if (err) res.status(500).json(err)
        else res.status(201).json({'message': 'Register successfuly'})
	})
})


router.get('/auth/refresh_token', (req, res) => {
      
})

router.get('/auth/logout', (req, res) => {
      
})


module.exports = router;