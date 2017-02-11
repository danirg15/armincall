const Joi = require('joi');
 
module.exports = {
    full: {
        body: {
            workshop_name:  Joi.string().required(),
            distributor:    Joi.string().required(),
            licence:        Joi.string().optional(),
            contact:        Joi.string().optional(),
            phone:          Joi.string().required(),   
            description:    Joi.string().optional(),       
            date:           Joi.string().regex(/^\d{2}[./-]\d{2}[./-]\d{4}$/).required(),
            time:           Joi.string().regex(/([01]\d|2[0-3]):([0-5]\d)/).required(),
            completed:      Joi.boolean().optional()
        }
    },

    optional: {
        body: {
            workshop_name:  Joi.string().optional(),
            distributor:    Joi.string().optional(),
            licence:        Joi.string().optional(),
            contact:        Joi.string().optional(),
            phone:          Joi.string().optional(),   
            description:    Joi.string().optional(),       
            date:           Joi.string().regex(/^\d{2}[./-]\d{2}[./-]\d{4}$/).optional(),
            time:           Joi.string().regex(/([01]\d|2[0-3]):([0-5]\d)/).optional(),
            completed:      Joi.boolean().optional()
        }
    }

  
};
