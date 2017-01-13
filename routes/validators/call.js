const Joi = require('joi');
 
module.exports = {

	full: {
		body: {
		    callerNumber:      	Joi.string().required(),
		    recieverNumber:    	Joi.string().required(),
		    date:               Joi.date().format('DD/MM/YYYY HH:mm:ss').required(),
		    durationInSeconds:  Joi.number().integer().required(),
		    status:             Joi.string().required(),
		    workshop:           Joi.string().hex().length(24).optional()
		}
	},

	optional: {
		query: {
			callerNumber:      Joi.string().optional(),
		    recieverNumber:    Joi.string().optional(),
		    date:               Joi.date().format('DD/MM/YYYY HH:mm:ss').optional(),
		    durationInSeconds:  Joi.number().integer().optional(),
		    status:             Joi.string().optional(),
		    workshop:           Joi.string().hex().length(24).optional()
		},
		
		body: {
		    callerNumber:      Joi.string().optional(),
		    recieverNumber:    Joi.string().optional(),
		    date:               Joi.date().iso().optional(),
		    durationInSeconds:  Joi.number().integer().optional(),
		    status:             Joi.string().optional(),
		    workshop:           Joi.string().hex().length(24).optional()
		}
	}
  
};
