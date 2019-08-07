import moment from 'moment';
import uuid from 'uuid';

const Booking = {

  findAll() {
    return this.bookings;
  },

  delete(id) {
    const booking = this.findOne(id);
    const index = this.bookings.indexOf(booking);
    this.bookings.splice(index, 1);
    return {};
  }
  
}
export default Booking;