tripRouter.post(
  '/trips/',
  // celebrate({
  //   body: validator.postTrip
  // }),
  tripController.postTrip
);