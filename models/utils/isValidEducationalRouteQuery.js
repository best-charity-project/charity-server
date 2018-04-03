const isValidString = value => /[А-Яа-яЁё\s\.\-]/.test(value);

const isValidYear = value => /[0-9]{4}/.test(value);

module.exports = { isValidString, isValidYear };
