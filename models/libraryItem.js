const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LibraryItemSchema = new Schema({
  category_tag: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});
const LibraryItem = mongoose.model('libraryItem', LibraryItemSchema);
module.exports = LibraryItem;
