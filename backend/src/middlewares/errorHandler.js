import logger from '../logger';
import { errorMessages as errors } from '../errors/errorMessages';

// eslint-disable-next-line no-unused-vars
export default (err, req, res, next) => {
  if (err.errors) {
    const errMessage = err.errors[0].message;
    res.status(422).json({ message: errMessage });
    return;
  }
  logger.error(
    `${errors[err.message].status || 500} - ${errors[err.message].message} - ${req.originalUrl} - 
    ${req.method} - ${req.ip}`,
  );
  res.status(errors[err.message].status || 500);
  res.json({ message: errors[err.message].message || 'Internal server error' });
};
