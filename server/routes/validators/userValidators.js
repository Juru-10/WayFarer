import { Joi } from 'celebrate';

export const postUser = Joi.object().keys({
  email: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
  first_name: Joi.string().trim().required(),
  last_name: Joi.string().trim().required()
});

export const getUser = Joi.object().keys({
  id: Joi.string().uuid()
});

export const putUser = Joi.object().keys({
  email: Joi.string().trim().required(),
  password: Joi.string().trim().required()
});