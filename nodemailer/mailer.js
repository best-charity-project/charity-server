const nodemailer = require('nodemailer');
const { service, user, pass } = require('../configs/nodemailerConfig.json');
const getMailOptions = require('./getMailOptions');

const transport = nodemailer.createTransport({
  service,
  auth: {
    user,
    pass,
  },
});

module.exports = {
  sendEmail(to, reason) {
    const mailOptions = getMailOptions(to, reason);
    return new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, (err, info) => {
        if (err) {
          reject(err);
        }
        resolve(info);
      });
    });
  },
};
