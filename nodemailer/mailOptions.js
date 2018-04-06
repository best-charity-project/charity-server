const registration = () => {
  return {
    subject: 'Регистрация на сайте On-Info',
    text: 'Спасибо за регистрацию!',
  };
};

const restorePassword = url => {
  return {
    subject: 'On-Info: новый пароль',
    text: `Для смены пароля, пожалуйста, перейдите по ссылке: ${url}`,
  };
};

module.exports = { registration, restorePassword };
