import Trip from '../data/Trip';

export default class tripController {

  static async getTrips(req, res) {
    const { body } = req;
    try {
      const trips = await Trip.findAll({});
      const status = 200;
      return res.status(status).json({
        status,
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

}
