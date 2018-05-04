const isValidString = require('./isValidString');

module.exports = ({ types, textSearch }) => {
  return types && types.every(isValidString) && textSearch;
};
