module.exports = token => token.expiresAt - Date.now() < 0;
