const isValidString = value => /[А-Яа-яЁё\s\.\-]/.test(value);

const isValidNumber = value => /[0-9]{4}/.test(value);

module.exports = { isValidString, isValidNumber };
