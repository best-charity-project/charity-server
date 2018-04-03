const isValidString = value => /[А-Яа-яЁё0-9\s\.\-]/.test(value);

const isValidYear = value => /[0-9]{4}/.test(value);

module.exports = { isValidString, isValidYear };
