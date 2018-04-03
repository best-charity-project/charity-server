const registration = () => {
  return {
    subject: 'Регистрация на сайте On-Info',
    html: '<p>Спасибо за регистрацию!</p>',
  };
};

const restorePassword = password => {
  return {
    subject: 'On-Info: новый пароль',
    html: `<p>Ваш новый пароль: ${password}</p>`,
  };
};

module.exports = { registration, restorePassword };
