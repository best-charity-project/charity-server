const express = require('express');
const logger = require('./utils/logger.utils');
const errorHandler = require('./handlers/error.handlers');
const passportMW = require('./utils/passport');
const api = require('./routes');

global.env = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined;

let app = express();
app.use(express.json());
app.use(passportMW.initialize());

app.use('/api', api);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Running on 3000');
});