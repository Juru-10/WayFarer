import moment from 'moment';
// import uuid from 'uuid';

const bookings = [{trip_id: 1,
bus_license_number: 'ADC234c',
trip_date: '23 jun 1998',
first_name: 'jura',
last_name: 'ruju',
user_email: 'rujuru@gmh.kjhj',
createdDate: moment(moment.now()).format('DD-MM-YYYY'),}];
const Booking = {
  
  create(data) {
     
    const newBooking = {
      
      message: data.success || 'Booked successfully',
      newdata: {
        trip_id: parseInt(data.trip_id,10) ,
        bus_license_number: data.bus_license_number || '',
        trip_date: data.trip_date || '',
        first_name: data.first_name || '',
        last_name: data.last_name || '',
        user_email: data.user_email || '',
        createdDate: moment(moment.now()).format('DD-MM-YYYY'),
      }
    };
    bookings.push(newBooking.newdata);
    return bookings;
  },

  findOne(id) {
    for(let i;i<=bookings.length;i++){
      if(bookings[i].id===id){
        return bookings[i];
      }
    }
  },

  findAll() {
    return bookings;
  },

  delete(id) {
    const booking = this.findOne(id);
    const index = this.bookings.indexOf(booking);
    this.bookings.splice(index, 1);
    return {};
  }
  
}
export default Booking;