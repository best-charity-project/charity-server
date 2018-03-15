module.exports = email =>
  email.length < 255 &&
  /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,8}[A-Z]{2,63}$/i.test(
    email,
  );
