// import { celebrate } from 'celebrate';
import { Router } from 'express';
import bookingController from '../controllers/bookingController';
// import * as validator from './validators/tripValidators';


const bookingRouter = Router();

bookingRouter.post(
  '/bookings/',
  // celebrate({
  //   body: validator.postTrip
  // }),
  bookingController.postBooking
);

bookingRouter.get('/bookings', bookingController.getBookings);

bookingRouter.get(
  '/bookings/:id',
  // celebrate({
  //   params: validator.getTrip
  // }),
  bookingController.getBooking
);

// bookingRouter.delete(
//   '/trips/:id',
  // celebrate({
  //   params: validator.getTrip
  // }),
//   bookingController.deleteBooking
// );

// tripRouter.put(
//   '/trips/:id',
//   // celebrate({
//   //   params: validator.getTrip,
//   //   body: validator.putTrip
//   // }),
//   tripController.updateTrip
// );

export default bookingRouter;