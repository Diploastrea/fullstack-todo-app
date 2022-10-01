import logger from '../logger';
import { errorMessages as errors } from '../errors/errorMessages';

// eslint-disable-next-line no-unused-vars
export default (err, req, res) => {
  logger.error(
    `${errors[err.message].status || 500} - ${errors[err.message].message} - ${req.originalUrl} - 
    ${req.method} - ${req.ip}`,
  );
  return res
    .set({ 'Content-type': '/json/; charset=utf-8' })
    .status(errors[err.message].status || 500)
    .json(errors[err.message].message || 'Internal server error');
};
