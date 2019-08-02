const express = require('express');

let homeRouter = require('./routes/index');
let userRouter = require('./routes/userRouter');
let tripRouter = require('./routes/tripRouter');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/home',homeRouter);
app.use('/users', userRouter);
app.use('/trips', tripRouter);

// app.use(errors());

app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  const status = error.status || 500;
  res.status(status).json({
    status,
    message: error.message || 'Server error'
  });
});

app.use((req, res, next) => {
  res.status(200).json({
    message: 'hahahaaaa wooow'
  });
});

module.exports = app;