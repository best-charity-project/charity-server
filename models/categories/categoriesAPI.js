const Categories = require('./categories');

const addCategory = category => {
  const categoryToAdd = new Categories(category);
  return categoryToAdd.save();
};

const getCategories = query => Categories.find(query);

module.exports = { addCategory, getCategories };
