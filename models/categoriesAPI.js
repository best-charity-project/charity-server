const Categories = require('./categories');

const addOneCategory = category => {
  const categoryToAdd = new Categories(category);
  return categoryToAdd.save();
};

const getAllCategories = () => Categories.find({});

module.exports = { addOneCategory, getAllCategories };
