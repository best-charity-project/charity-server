const isValidString = require('./isValidString');

module.exports = query => {
  if (Object.keys(query).length === 0) {
    return false;
  }
  return Object.values(query).every(value => {
    return isValidString(value);
  });
};
