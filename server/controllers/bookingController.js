
import Booking from '../data/Booking';

export default class bookingController {

  static async postBooking(req, res) {
    const { body } = req;
    try {
      const bookings = await Booking.create(body);
      const status = 201;
      return res.status(status).json({
        status,
        message:"created successfully", 
        bookings
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }

  static async getBookings(req, res) {
    const { body } = req;
    try {
      const bookings = await Booking.findAll({body});
      const status = 200;
      return res.status(status).json({
        status,
        bookings
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }

  static async getBooking(req, res) {
    const { id } = req.params;
    let status = 200;

    try {
      const booking = await Booking.findOne({id});

      // if (!booking) {
      //   status = 404;
      //   return res.status(status).json({
      //     status,
      //     message: 'Booking not found'
      //   });
      // }
      return res.status(status).json({
        status,
        booking
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }

  static async deleteBooking(req, res) {
    const { id } = req.params;
    let status = 200;
    try {
      const booking = await Booking.findOne({
        where: {
          id
        }
      });

      // if (!booking) {
      //   status = 404;
      //   return res.status(status).json({
      //     status,
      //     message: 'User not found'
      //   });
      // }
      await booking.destroy();
      return res.status(status).json({
        status,
        message: 'Booking deleted successfully'
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }

  static async deleteBooking(req, res) {
    const { id } = req.params;
    let status = 200;

    try {
      const booking = await Booking.findOne({
        where: {
          id
        }
      });

      if (!booking) {
        status = 404;
        return res.status(status).json({
          status,
          message: 'User not found'
        });
      }
      await booking.destroy();
      return res.status(status).json({
        status,
        message: 'The User deleted successfully'
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
  