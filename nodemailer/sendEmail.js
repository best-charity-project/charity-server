const transport = require('./transport');
const getMailOptions = require('./getMailOptions');

module.exports = (to, reason, data) => {
  const mailOptions = getMailOptions(to, reason, data);
  return new Promise((resolve, reject) => {
    transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      }
      resolve(info);
    });
  });
};
