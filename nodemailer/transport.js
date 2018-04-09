const nodemailer = require('nodemailer');
const { mailService, user, pass } = require('../configs/nodemailerConfig.json');

module.exports = nodemailer.createTransport({
  service: mailService || process.env.mailService,
  auth: {
    user: user || process.env.user,
    pass: pass || process.env.pass,
  },
});
