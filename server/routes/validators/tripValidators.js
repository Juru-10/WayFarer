import { Joi } from 'celebrate';

export const postTrip = Joi.object().keys({
  success: Joi.string().trim().required(),
  seating_capacity: Joi.string().trim().required(),
  origin: Joi.string().trim().required(),
  destination: Joi.string().trim().required(),
  trip_date: Joi.date().required(),
  fare: Joi.number().required()
});

export const getTrip = Joi.object().keys({
  trip_id: Joi.string().uuid()
});