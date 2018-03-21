const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newsSchema = new Schema({
  title: { type: String, required: true },
  newsText: { type: String, required: true },
  url: { type: String },
  date: { type: Date, default: Date.now },
  tag: String,
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
