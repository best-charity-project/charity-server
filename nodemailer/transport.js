const nodemailer = require('nodemailer');
const { service, user, pass } = require('../configs/nodemailerConfig.json');

module.exports = nodemailer.createTransport({
  service,
  auth: {
    user,
    pass,
  },
});
