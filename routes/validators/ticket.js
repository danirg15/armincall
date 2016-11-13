const Joi = require('joi');
 
module.exports = {

	full: {
		  body: {
		    workshop:       Joi.string().hex().length(24).required(),
		    description:    Joi.string().required(),
		    category:       Joi.string().optional(),
		    calls:          Joi.array().items(Joi.string().hex().length(24).optional()),
		    completed:      Joi.boolean().optional()    
		  }
	},

	optional: {
		body: {
		    workshop:       Joi.string().hex().length(24).optional(),
		    description:    Joi.string().optional(),
		    category:       Joi.string().optional(),
		    calls:          Joi.array().items(Joi.string().hex().length(24).optional()),
		    completed:      Joi.boolean().optional()    
		  }
	}


}
