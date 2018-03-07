const libraryItem = require('./libraryItem');
const validateAsString = require('./validateLibraryQuery');

const addItem = item => {
  const itemToAdd = new libraryItem(item);
  return itemToAdd.save();
};

const getItems = searchQuiery => {
  const { categoryTag, type } = searchQuiery;
  if (
    categoryTag &&
    validateAsString(categoryTag) &&
    type &&
    validateAsString(type)
  ) {
    return libraryItem.find({ categoryTag, type });
  } else {
    return Promise.reject(new Error('Invalid queries'));
  }
};

module.exports = {
  addItem,
  getItems,
};
