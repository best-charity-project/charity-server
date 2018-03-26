const jwt = require('jsonwebtoken');
const { jwtSecret, tokenExpires } = require('../../configs/config');

module.exports = payload =>
  jwt.sign(payload, jwtSecret, {
    expiresIn: tokenExpires,
  });
