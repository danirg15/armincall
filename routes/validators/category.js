const Joi = require('joi');
 
module.exports = {
	full: {
		body: {
		    name:  Joi.string().required()
		}
	}
  
};


