import Trip from '../data/Trip';
// import { tokenGenerator } from '../helpers/jwt';

export default class tripController {

  static async getTrips(req, res) {
    const { body } = req;
    try {
      const trips = await Trip.findAll(body);
      const status = 200;
      return res.status(status).json({
        status,
        message: 'Here are all trips',
        trips
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }

  static async postTrip(req, res) {
    const { body } = req;
    try {
      const { message, data } = await Trip.create(body);
      // const newTrip = await Trip.create(body);
      // newTrip.token = tokenGenerator({origin, destination, state});
      const status = 201;
      return res.status(status).json({
        status,
        message,
        data
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }  

  static async getTrip(req, res) {
    const trip_id = req.params.trip_id;
    let status = 200;console.log(trip_id);

    try {
      const trip = await Trip.findOne(data);

      // if (!trip) {
      //   status = 404;
      //   return res.status(status).json({
      //     status,
      //     message: 'Trip not found'
      //   });
      // }
      return res.status(status).json({
        status,
        trip
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }

  static async cancelTrip(req, res) {
    const { trip_id } = req.params;
    let status = 200;

    try {
      const {state} = await Trip.cancel({
        where: {
          trip_id
        }
      });

      if (!trip) {
        status = 404;
        return res.status(status).json({
          status,
          message: 'Trip not found'
        });
      }
      return res.status(status).json({
        status,
        message: 'The trip is successfully canceled',
        state
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }

}



