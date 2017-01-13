const User = require('../models/user')
const auth = require('../auth')
const passwordHash = require('password-hash');

module.exports = {

	login: (username, password, callback) => {
		User.findOne({
			'username': username
		}, (err, user) => {

			if (!err && user && passwordHash.verify(password, user.password)){
				let exp = process.env.USER_TOKEN_LIFETIME || '60m'    
		        let options = {
		            'issuer': 'ArminCall',
		            'expiresIn': exp,
		            'audience': 'users'
		        }
				auth.getNewToken(options, { 'user_id': user._id }, callback)
			}
			else{
				callback(err, null)
			}

		})			
	}
	
}
