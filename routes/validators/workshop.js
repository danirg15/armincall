const Joi = require('joi');
 
module.exports = {

    full: {
        body: {
            name:           Joi.string().required(),
            cif:            Joi.string().optional().allow(''),
            contact:        Joi.string().optional().allow(''),
            address: {
              description:  Joi.string().optional().allow(''),
            },
            distributor:  Joi.string().required(),
            email:      Joi.string().email().optional().allow(''),
            phone:      Joi.array().items(Joi.string().allow('')),
        }
    }

  
};


