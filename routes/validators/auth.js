const Joi = require('joi');
 
module.exports = {
	full: {
		body: {
		    username:      	Joi.string().required(),
		    password:    	Joi.string().required()
		}
	}
};
