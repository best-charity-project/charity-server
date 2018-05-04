const isValidString = require('./isValidString');

module.exports = query => {
  if (Object.keys(query).length !== 0) {
    return Object.values(query).every(value => {
      return isValidString(value);
    });
  }
  return false;
};
