const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LibraryItemSchema = new Schema({
  categoryTag: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

<<<<<<< HEAD
LibraryItemSchema.index({ title: 'text', description: 'text' }).func();
let func = function() {
  console.log('dd');
};

=======
>>>>>>> 9a31bd3ba0169085ea3ae01599d3b74b974dc831
const LibraryItem = mongoose.model('libraryItem', LibraryItemSchema);

module.exports = LibraryItem;
