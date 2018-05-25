const express = require('express');
const logger = require('./utils/logger.utils');
const errorHandler = require('./handlers/error.handlers');
const passportMW = require('./utils/passport');
const api = require('./routes');

global.env = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined;

let app = express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
 });
app.use(express.json());
app.use(passportMW.initialize());

app.use('/api', api);

app.use(errorHandler);

app.listen(3001, () => {
    console.log('Running on 3000');
});