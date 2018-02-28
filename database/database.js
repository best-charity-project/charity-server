const mongoose = require('mongoose');
const {
  user,
  password,
  port,
  dbName,
  host
} = require('../configs/config.json');
const connectToDatabase = () => {
  mongoose.connect(
    `mongodb://${user || process.env.USER}:${password ||
      process.env.PASSWORD}@${host || process.env.HOST}:${port ||
      process.env.DB_PORT}/${dbName || process.env.DB_NAME}`
  );
};

module.exports = connectToDatabase;
