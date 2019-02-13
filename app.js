require('dotenv').config();
const express = require('express');
const errorHandler = require('./handlers/error.handlers');
const passportMW = require('./utils/passport');
const api = require('./routes');
const PORT = process.env.PORT || 3001;

let app = express();

app
    .use(express.json())
    .use(express.urlencoded({
        extended: true
    }))
    .use(passportMW.initialize())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    })
    .use('/api', api)
    .use('/images', express.static(__dirname + '/images'))
    .use(errorHandler);

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});
