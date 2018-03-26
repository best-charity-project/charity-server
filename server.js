const express = require('express');

let app = express();
const bodyParser = require('body-parser');
const router = require('./routes/Routes');
const passport = require('passport');
const connectToDatabase = require('./database/database');
const configurePassport = require('./passport/configurePassport');

connectToDatabase();

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(bodyParser.json());

app = configurePassport(app);

const port = process.env.PORT || 8080;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use('/api', router);

app.listen(port);
