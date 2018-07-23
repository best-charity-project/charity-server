const express = require('express');
const logger = require('./utils/logger.utils');
const errorHandler = require('./handlers/error.handlers');
const passportMW = require('./utils/passport');
const api = require('./routes');
// const cors = require('cors')


global.env = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production';

const PORT = process.env.PORT || 3001;
console.log(process.env.PORT)
let app = express();

// app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


app.use(passportMW.initialize());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type' );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(errorHandler);
app.use('/api', api);
app.use('/images', express.static(__dirname + '/images'));

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});