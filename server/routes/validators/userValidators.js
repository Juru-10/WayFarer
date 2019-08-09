import { Joi } from 'celebrate';

export const postUser = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(16).alphanum().trim().required(),
  first_name: Joi.string().trim().required(),
  last_name: Joi.string().trim().required()
});

export const getUser = Joi.object().keys({
  id: Joi.number().required()
});

// export const checkUser = Joi.object().keys({
//   email: Joi.string().required(),
//   password: Joi.string().required(),
// });
