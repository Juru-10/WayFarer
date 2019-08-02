const express = require('express');

const tripRouter = express.Router();

tripRouter.get('/',(req, res) => {
  res.json({info: 'List of Trips'});
});

tripRouter.post('/',(req, res) => {
  res.json({info: 'Post a Trip'});
});

tripRouter.delete('/',(req, res) => {
  res.json({info: 'Delete a Trip'});
});

tripRouter.put('/',(req, res) => {
  res.json({info: 'Edit a Trip'});
});

// import { celebrate } from 'celebrate';
// import { Router } from 'express';
// import controller from '../controllers/EducationController';
// import * as validator from './validators/educationValidators';
// const router = Router();

// router.post(
//   '/',
//   celebrate({
//     body: validator.postEducation
//   }),
//   controller.postEducation
// );

// router.get('/', controller.getEducations);

// router.get(
//   '/:id',
//   celebrate({
//     params: validator.getEducation
//   }),
//   controller.getEducation
// );

// router.delete(
//   '/:id',
//   celebrate({
//     params: validator.getEducation
//   }),
//   controller.deleteEducation
// );

// router.put(
//   '/:id',
//   celebrate({
//     params: validator.getEducation,
//     body: validator.putEducation
//   }),
//   controller.updateEducation
// );


module.exports = tripRouter;