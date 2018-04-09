const options = require('./mailOptions');

module.exports = (to, reason, data) => {
  const mailOptions = options[reason](data);
  mailOptions.to = to;
  return mailOptions;
};
