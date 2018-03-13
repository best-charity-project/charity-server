const libraryItem = require('./libraryItem');
const isValidQuery = require('./isValidLibraryQuery');

const addItem = item => {
  const itemToAdd = new libraryItem(item);
  return itemToAdd.save();
};

const getItems = searchQuery => {
  const { categoryTag, type, approved } = searchQuery;
  if (
    categoryTag &&
    isValidQuery(categoryTag) &&
    type &&
    isValidQuery(type) &&
    approved
  ) {
    return libraryItem.find({
      categoryTag,
      type,
      approved,
    });
  } else {
    return Promise.reject(new Error('Invalid queries'));
  }
};

const getPendingItems = () => libraryItem.find({ approved: false });

module.exports = {
  addItem,
  getItems,
  getPendingItems,
};
