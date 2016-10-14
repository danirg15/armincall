const Joi = require('joi');
 
module.exports = {
  query: {
    number:      Joi.string().required()
  }
};
