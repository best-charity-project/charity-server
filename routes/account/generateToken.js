const randomstring = require('randomstring');
const { passTokenExpires } = require('../../configs/config.json');

module.exports = () => {
  const token = randomstring.generate();
  const expiresAt = Date.now() + passTokenExpires;
  return { token, expiresAt };
};
