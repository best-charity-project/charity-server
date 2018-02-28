const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categoriesSchema = new Schema({
  title: { type: String, required: true },
  category_tag: String,
});

const Categories = mongoose.model('Categories', categoriesSchema);

module.exports = Categories;
