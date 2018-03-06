const libraryItem = require('./libraryItem');

const addItem = item => {
  const itemToAdd = new libraryItem(item);
  return itemToAdd.save();
};

const getItems = searchQuiery => libraryItem.find(searchQuiery);

module.exports = {
  addItem,
  getItems,
};
