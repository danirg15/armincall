const Joi = require('joi');
 
module.exports = {
  body: {
    name:           Joi.string().required(),
    distributor:    Joi.string().required(),
    licence:        Joi.string().optional(),
    contact:        Joi.string().optional(),
    phone:          Joi.string().required(),   
    description:    Joi.string().optional(),       
    date:           Joi.string().regex(/^\d{2}[./-]\d{2}[./-]\d{4}$/).required(),
    time:           Joi.string().regex(/([01]\d|2[0-3]):([0-5]\d)/).required()
  }
};
