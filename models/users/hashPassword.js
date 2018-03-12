const crypto = require('crypto');

const LEN = 24;
const SALT_LEN = 24;
const ITERATIONS = 100000;
const DIGEST = 'sha256';

function hashPassword(password, salt) {
  return new Promise((resolve, reject) => {
    if (arguments.length === 2) {
      crypto.pbkdf2(
        password,
        salt,
        ITERATIONS,
        LEN,
        DIGEST,
        (err, derivedKey) => {
          if (err) {
            return reject(err);
          }
          return resolve(derivedKey.toString('hex'));
        },
      );
    } else {
      crypto.randomBytes(SALT_LEN, (err, salt) => {
        if (err) {
          return Promise.reject(err);
        }

        salt = salt.toString('hex');
        crypto.pbkdf2(
          password,
          salt,
          ITERATIONS,
          LEN,
          DIGEST,
          (err, derivedKey) => {
            if (err) {
              reject(err);
            }
            resolve({
              hash: derivedKey.toString('hex'),
              salt,
            });
          },
        );
      });
    }
  });
}

function verify(password, hash, salt) {
  return new Promise((resolve, reject) => {
    hashPassword(password, salt)
      .then(hashedPassword => {
        if (hash === hashedPassword) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

module.exports = { hashPassword, verify };
