const isValid = value => (value ? !/[^A-Za-z]/.test(value) : false);

module.exports = isValid;
