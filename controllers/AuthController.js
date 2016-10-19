const User = require('../models/user')
const auth = require('../auth')
const passwordHash = require('password-hash');

module.exports = {

	login: (username, password, callback) => {
		User.findOne({
			'username': username,
			'password': passwordHash.generate(password)
		}, (err, user) => {
			if (!err && user) 
				auth.getNewToken({ 'user_id': user._id }, callback)
			else
				callback(err, null)
		})			
	}


}

