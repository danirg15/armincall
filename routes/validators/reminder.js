const Joi = require('joi');
 
module.exports = {
  body: {
    description:  Joi.string().required(),
    date:         Joi.string().regex(/^\d{2}[./-]\d{2}[./-]\d{4}$/).required(),
    time:         Joi.string().regex(/([01]\d|2[0-3]):([0-5]\d)/).required()
  }
};


