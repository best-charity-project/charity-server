const nodemailer = require('nodemailer');
const { nodemailerConf } = require('../config');

module.exports = nodemailer.createTransport({
    service: nodemailerConf.serviceMail || process.env.serviceMail,
    auth: {
      user: nodemailerConf.user || process.env.user,
      pass: nodemailerConf.password || process.env.password,
    },
  });