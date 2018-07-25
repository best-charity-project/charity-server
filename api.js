const baseURLDev =  require('./config/dev.json');
const baseURLProd = require('./config/prod.json');

let dev = process.env.NODE_ENV !== 'production';

let server = dev ? baseURLDev.baseURLDev : baseURLProd.baseURLProd;

module.exports.server = server;
