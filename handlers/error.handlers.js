const moment = require('moment');
const logger = require('../utils/logger.utils');
5
module.exports = (err, req, res, next) => {
  var body = {
    status: err.status
  };
  if (env) {
    body.stack = err.stack;
  }
  logger([moment().format('HH:MM:SS'), err.stack].join(':'))
  body.message = err.message;
  res.json(body);
}