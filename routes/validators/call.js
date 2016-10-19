const Joi = require('joi');
 
module.exports = {

	full: {
		body: {
		    caller_number:      Joi.string().required(),
		    reciever_number:    Joi.string().required(),
		    date:               Joi.date().format('DD/MM/YYYY HH:mm:ss').required(),
		    durationInSeconds:  Joi.number().integer().required(),
		    status:             Joi.string().required(),
		    workshop:           Joi.string().hex().length(24).optional()
		}
	},

	optional: {
		body: {
		    caller_number:      Joi.string().optional(),
		    reciever_number:    Joi.string().optional(),
		    date:               Joi.date().format('DD/MM/YYYY HH:mm:ss').optional(),
		    durationInSeconds:  Joi.number().integer().optional(),
		    status:             Joi.string().optional(),
		    workshop:           Joi.string().hex().length(24).optional()
		}
	}
  
};
