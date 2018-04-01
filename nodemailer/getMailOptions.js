const options = require('./mailOptions');

module.exports = (to, reason, data) => {
  let mailOptions = options[reason](data);
  mailOptions.to = to;
  return mailOptions;
};
