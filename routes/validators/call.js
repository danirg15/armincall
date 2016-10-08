const Joi = require('joi');
 
module.exports = {
  body: {
    caller_number:      Joi.string().required(),
    reciever_number:    Joi.string().required(),
    date:               Joi.date().format('DD/MM/YYYY HH:mm:ss'),
    //time: 				Joi.string().required(),
    durationInSeconds:  Joi.number().integer().required(),
    status:             Joi.string().required(),
    workshop:           Joi.string().hex().length(24).optional()
  }
};
