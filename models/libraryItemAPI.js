const libraryItem = require('./libraryItem');

const addOneItem = item => {
  const itemToAdd = new libraryItem(item);
  return itemToAdd.save();
};
const getAllItems = () => libraryItem.find({});

const searchByType = typeName => libraryItem.find({ type: typeName });

module.exports = { addOneItem, getAllItems, searchByType };
