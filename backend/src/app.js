import express from 'express';
import morgan from 'morgan';
import api from './routes';
import logger from './logger';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(morgan('combined', { stream: logger.stream }));
app.use('/api', api);
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});
app.use(errorHandler);

export default app;
