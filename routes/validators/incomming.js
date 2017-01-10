const Joi = require('joi');
 
module.exports = {
  body: {
    number:      Joi.string().required()
  }
};
