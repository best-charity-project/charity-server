const Categories = require('./categories');

const addCategory = category => {
  const categoryToAdd = new Categories(category);
  return categoryToAdd.save();
};

const getCategories = () => Categories.find({});

const deleteCategory = id =>
  Categories.findById(id).then(item => item.remove());

const updateCategory = (id, updatedData) =>
  Categories.findById(id).then(item => {
    item.set(updatedData);
    return item.save();
  });

module.exports = { addCategory, getCategories, deleteCategory, updateCategory };
