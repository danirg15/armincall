const router 			= require('express').Router()
const AuthController 	= require('../controllers/AuthController')
const validate 			= require('express-validation');
const validator 		= require('./validators');


router.post('/auth/login', (req, res) => {
	AuthController.login(req.body.username, req.body.password, (err, token) => {
		if (token) {
			res.status(200).json({ 
				'message': 'Successful Authentication', 
				'token': token 
			})
		}
		else{
			res.status(401).json({ 
				'message': 'Authentication failed', 
				'error': err
			})
		}
	})
})

router.get('/auth/refresh_token', (req, res) => {
      
})

router.get('/auth/logout', (req, res) => {
      
})


module.exports = router;