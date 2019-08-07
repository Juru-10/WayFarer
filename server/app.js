import express from 'express';
import morgan from 'morgan';
// import { errors } from 'celebrate';
import bodyParser from 'body-parser';

import bookingRouter from './routes/bookingRouter';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', bookingRouter);

export default app;