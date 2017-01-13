const Joi = require('joi');
 
module.exports = {
	full: {
		  body: {
		    name:       Joi.string().required(),
		    email:    	Joi.string().email().required(),
		    username:   Joi.string().required(),
		    password:   Joi.string().required()
		  }
	}
}