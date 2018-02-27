const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
// const DB = require('../database/database');
const {
  user,
  password,
  port,
  dbName,
  host,
} = require('../configs/config.json');
mongoose.connect(
  `mongodb://${user || process.env.USER}:${password ||
    process.env.PASSWORD}@${host || process.env.HOST}:${port ||
    process.env.DB_PORT}/${dbName || process.env.DB_NAME}`
);
mongoose.connection.on('open', () => console.log('Connected via mongoose'));

router
  .route('/news')
  .get((req, res) => {
    database
      .connect(database.URI)
      .then(() => database.getAllNews())
      .then(result => {
        res.json(result);
        database.close();
      })
      .catch(err => {
        throw err;
      });
  })
  .post((req, res) => {
    database
      .connect(database.URI)
      .then(() => {
        const news = req.body;
        return database.addOneNews(news);
      })
      .then(() => {
        res.json({
          message: 'News was created successfully!',
        });
        database.close();
      })
      .catch(err => {
        throw err;
      });
  });
router
  .route('/news/:_id')
  .put((req, res) => {
    database
      .connect(database.URI)
      .then(() => {
        const id = req.params._id; // eslint-disable-line no-underscore-dangle
        const updatedNews = req.body;
        return database.updateNews(id, updatedNews);
      })
      .then(() => {
        res.json({
          message: 'News was updated successfully!',
        });
        database.close();
      })
      .catch(err => {
        throw err;
      });
  })
  .get((req, res) => {
    database
      .connect(database.URI)
      .then(() => {
        const id = req.params._id;
        return database.getOneNews(id);
      })
      .then(result => {
        res.json(result);
        database.close();
      })
      .catch(err => {
        throw err;
      });
  })
  .delete((req, res) => {
    database
      .connect(database.URI)
      .then(() => {
        const id = req.params._id; // eslint-disable-line no-underscore-dangle
        return database.deleteNews(id);
      })
      .then(() => {
        res.json({
          message: 'News was deleted!',
        });
        database.close();
      })
      .catch(err => {
        throw err;
      });
  });

module.exports = router;
