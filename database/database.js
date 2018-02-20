const { MongoClient } = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb').ObjectId;
const {
  user, password, port, dbName, host,
} = require('../configs/config.json');

class DB {
  constructor() {
    this.URI = `mongodb://${user}:${password}@${host}:${port}/${dbName}`;
    this.db = null;
    this.dbClient = null;
  }

  connect() {
    return MongoClient.connect(this.URI)
      .then((client) => {
        this.db = client.db(dbName);
        this.dbClient = client;
      })
      .catch((err) => {
        throw err;
      });
  }

  close() {
    if (this.db) {
      this.dbClient.close();
    }
  }

  addOneNews(news) {
    return this.db.collection('news').insertOne(news);
  }

  getAllNews() {
    return this.db
      .collection('news')
      .find()
      .toArray()
      .then(result => result)
      .catch((err) => {
        throw err;
      });
  }
  updateNews(id, updatedNews) {
    return this.db
      .collection('news')
      .findOneAndUpdate(
        {
          _id: new ObjectId(id), // eslint-disable-line no-underscore-dangle
        },
        {
          $set: {
            title: updatedNews.title,
            shortDescription: updatedNews.shortDescription,
            url: updatedNews.url,
            date: updatedNews.date,
          },
        },
      )
      .catch((err) => {
        throw err;
      });
  }
  deleteNews(id) {
    return this.db
      .collection('news')
      .deleteOne({
        _id: new ObjectId(id),
      })
      .catch((err) => {
        throw err;
      });
  }
}

module.exports = DB;
