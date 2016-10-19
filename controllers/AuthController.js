const User = require('../models/user')
const auth = require('../auth')
const passwordHash = require('password-hash');

module.exports = {

	login: (username, password, callback) => {
		User.findOne({
			'username': username
		}, (err, user) => {

			if (!err && user && passwordHash.verify(password, user.password)){
				auth.getNewToken({ 'user_id': user._id }, callback)
			}
			else{
				callback(err, null)
			}

		})			
	}


}

