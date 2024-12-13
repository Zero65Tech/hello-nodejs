const Joi = require('joi');

exports.add = Joi.object({
  name: Joi.string().required(),
  info: Joi.string().required(),
  count: Joi.number().integer().min(0).required(),
  timestamp: Joi.object({
    create: Joi.date().iso().required(),
    update: Joi.date().iso().required()
  }).required()
});

exports.update = Joi.object({
  name: Joi.string(),
  info: Joi.string(),
  count: Joi.number().integer().min(0),
  'timestamp.update': Joi.date().iso().required()
});
