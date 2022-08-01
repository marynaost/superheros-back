const Joi = require("joi");

const heroesSchema = Joi.object({
  nickname: Joi.string().min(2).max(20),
  real_name: Joi.string().min(2).max(40),
  origin_description: Joi.string().min(2).max(600),
  superpowers: Joi.string().min(2).max(550),
  catch_phrase: Joi.string().min(2).max(200),
  images: Joi.string(),
});

module.exports = heroesSchema;
