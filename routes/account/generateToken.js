const randomstring = require('randomstring');
const { passTokenExpires } = require('../../configs/config.json');

module.exports = () => {
  const tokenExpires = passTokenExpires || process.env.passTokenExpires;
  const token = randomstring.generate();
  const expiresAt = Date.now() + parseInt(tokenExpires);
  return { token, expiresAt };
};
