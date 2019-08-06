create(data) {
  const newTrip = {
    status: data.success || 'success',
    data: {
      trip_id: uuid.v4(),
      seating_capacity: data.seating_capacity || '',
      origin: data.origin || '',
      destination: data.destination || '',
      trip_date: data.trip_date || '',
      fare: data.fare || '',
      createdDate: moment.now(),
      modifiedDate: moment.now()
    }
  };
  this.trips = [];
  this.trips.push(newTrip);
  return newTrip;
},