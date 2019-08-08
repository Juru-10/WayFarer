import { Joi } from 'celebrate';

export const postTrip = Joi.object().keys({
  seating_capacity: Joi.string().required(),
  origin: Joi.string().required(),
  destination: Joi.string().required(),
  trip_date: Joi.string().required(),
  fare: Joi.string().required(),
  bus_license_number: Joi.string().required()
});

export const getTrip = Joi.object().keys({
  trip_id: Joi.number().required()
});

export const patchTrip = Joi.object().keys({
  trip_id: Joi.string().required()
});