const express = require('express');
const { URLSearchParams } = require('url');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/Routes');
const connectToDatabase = require('./database/database');
connectToDatabase();

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use('/api', router);

app.listen(port);
