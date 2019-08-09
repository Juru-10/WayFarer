import { celebrate } from 'celebrate';
import { Router } from 'express';
import tripController from '../controllers/tripController';

// import * as validator from './validators/tripValidators';

const tripRouter = Router();


tripRouter.post(
  '/trips',
  // celebrate({
  //   body: validator.postTrip
  // }),
  tripController.postTrip
);

tripRouter.get(
  '/trips/:trip_id',
  // celebrate({
  //   body: validator.getTrip
  // }),
  tripController.getTrip
);

tripRouter.get('/trips', tripController.getTrips);

tripRouter.patch(
  '/trips/trip_id/cancel',
  // celebrate({
  //   params: validator.getTrip,
  //   body: validator.patchTrip
  // }),
  tripController.cancelTrip
);


export default tripRouter;

