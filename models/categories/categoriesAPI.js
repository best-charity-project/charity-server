const Categories = require('./categories');

const addOneCategory = category => {
  const categoryToAdd = new Categories(category);
  return categoryToAdd.save();
};

const getAllCategories = () => Categories.find({});

const getCategoryByTag = tag => Categories.find({ category_tag: tag });

module.exports = { addOneCategory, getAllCategories, getCategoryByTag };
