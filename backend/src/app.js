import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { api } from './routes';
import logger from './logger';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));
app.use('/api', api);
app.use(errorHandler);

export default app;
