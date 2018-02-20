const express = require('express');

const router = express.Router();
const DB = require('../database/database');

const database = new DB();

router
  .route('/news')
  .get((req, res) => {
    database
      .connect(database.URI)
      .then(() => database.getAllNews())
      .then((result) => {
        res.json(result);
        database.close();
      })
      .catch((err) => {
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
        res.json({ message: 'News was created successfully!' });
        database.close();
      })
      .catch((err) => {
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
        res.json({ message: 'News was updated successfully!' });
        database.close();
      })
      .catch((err) => {
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
        res.json({ message: 'News was deleted!' });
        database.close();
      })
      .catch((err) => {
        throw err;
      });
  });

module.exports = router;
