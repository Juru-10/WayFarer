static async postTrip(req, res) {
  const { body } = req;
  try {
    const trip = await Trip.create(body);
    const status = 201;
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