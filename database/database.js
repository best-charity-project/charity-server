const mongoose = require('mongoose');
const {
    Database
} = require('../configs/config.json');

const connectToDatabase = () => {
    mongoose.connect(
        `mongodb://${Database.user || process.env.USER}:${Database.password ||
        process.env.PASSWORD}@${Database.host || process.env.HOST}:${Database.port ||
        process.env.DB_PORT}/${Database.dbName || process.env.DB_NAME}`,
    );
};

module.exports = connectToDatabase;