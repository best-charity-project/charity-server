const logger = require('../utils/logger.utils');

module.exports = (err, req, res, next) => {
  logger.log({
    level: 'error',
    message: err
  });
  res.status(err.status || 500).json(err.message || "Internal server error");
}