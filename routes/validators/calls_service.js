const Joi = require('joi');
 
module.exports = {

	query: {
		callid:        Joi.string().required(),
		callerid:      Joi.number().required(),
	    ext:    	   Joi.number().required(),
	    duration:  	   Joi.number().integer().optional(),
	    direction:     Joi.string().required()
	}
	
};
