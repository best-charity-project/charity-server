const mongoose = require('mongoose');
const config = require('../config');
mongoose.set('debug', true);

mongoose.connect(config.mongoose.uri);

module.exports = mongoose;