const Categories = require('./categories');

const addCategory = category => {
  const categoryToAdd = new Categories(category);
  return categoryToAdd.save();
};

const getCategories = () => Categories.find({});

module.exports = { addCategory, getCategories };
