const isValidString = require('./isValidString');

module.exports = ({ types, textSearch }) => {
  if (types && types.every(isValidString) && textSearch) {
    return true;
  }
  return false;
};
