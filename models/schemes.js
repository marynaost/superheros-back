const Joi = require("joi");

const heroesSchema = Joi.object({
  nickname: Joi.string().min(2).max(50).required(),
  real_name: Joi.string().min(2).max(50),
  origin_description: Joi.string().min(2).max(1000),
  superpowers: Joi.string(),
  catch_phrase: Joi.string(),
  images: Joi.string().min(2).max(200),

  // images: Joi.array().items(Joi.string()),
});

module.exports = heroesSchema;
