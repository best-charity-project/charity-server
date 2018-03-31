const options = require('./mailOptions');

module.exports = (to, reason) => {
  let mailOptions = options[reason];
  mailOptions.to = to;
  return mailOptions;
};
