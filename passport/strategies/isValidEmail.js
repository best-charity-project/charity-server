module.exports = email =>
  email.length < 255 && /^\S+@\S+[\.][0-9a-z]+$/i.test(email);
