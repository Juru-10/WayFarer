import moment from 'moment';
// import uuid from 'uuid';

const trips = [{
  trip_id: 1,
  // token: data.token,
  bus_license_number: 'RAA456Y',
  seating_capacity: 48,
  origin: 'Kigali',
  destination: 'Kibungo',
  trip_date: '25-08-2019',
  fare: 7000,
  state: 'Active',
  createdDate: moment(moment.now()).format('DD-MM-YYYY'),
}];

const Trip = {

  // constructor() {
  //   this.trips = [];
  // },

  create(data) {
    // this.trips = [];
    const newTrip = {
      
      message: data.success || 'Trip created successfully',
      data: {
        trip_id: trips.length+1,
        token: data.token,
        bus_license_number: data.bus_license_number || '',
        seating_capacity: data.seating_capacity || '',
        origin: data.origin || '',
        destination: data.destination || '',
        trip_date: data.trip_date || '',
        fare: data.fare || '',
        state: data.state || 'Active',
        createdDate: moment(moment.now()).format('DD-MM-YYYY'),
      }
    };
    
    trips.push(newTrip.data);
  
    return newTrip;
  },  

  findAll() {
    return trips;
  },

  findOne(trip_id) {
    for (let i; i<=trips.length; i++) {
      if(trips[i].trip_id==trip_id){return trips[i];};
    }
  },

  cancel(trip_id,trip) {
    for (trip of this.trips) {
      this.trips.find(trip => trip.trip_id === trip_id);
      return trip.state = canceled;
    }
  },
  // update(id, data) {
  //   const booking = this.findOne(id);
  //   const index = this.bookings.indexOf(booking);
  //   this.bookings[index].status = data['success'] || booking.success;
  //   this.bookings[index].booking_id = data['booking_id'] || booking.booking_id;
  //   this.bookings[index].bus_license_number = data['bus_license_number'] || booking.bus_license_number;
  //   this.bookings[index].trip_date = data['trip_date'] || booking.trip_date;
  //   this.bookings[index].first_name = data['first_name'] || booking.first_name;
  //   this.bookings[index].last_name = data['last_name'] || booking.last_name;
  //   this.bookings[index].user_email = data['user_email'] || booking.user_email;
  //   this.bookings[index].modifiedDate = moment.now();
  //   return this.bookings[index];
  // },
}

export default Trip;
 
