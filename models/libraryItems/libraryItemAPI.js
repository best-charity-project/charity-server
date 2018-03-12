const libraryItem = require('./libraryItem');
const isValidQuery = require('./isValidLibraryQuery');

const addItem = item => {
  const itemToAdd = new libraryItem(item);
  return itemToAdd.save();
};

const getItems = searchQuery => {
  const { categoryTag, type, approved } = searchQuery;
  const onlyApproved = searchQuery.approved;
  if (
    categoryTag &&
    isValidQuery(categoryTag) &&
    type &&
    isValidQuery(type) &&
    onlyApproved
  ) {
    return libraryItem.find({
      categoryTag,
      type,
      approved: onlyApproved,
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
