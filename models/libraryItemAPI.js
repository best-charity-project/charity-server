const libraryItem = require('./libraryItem');

const addOneItem = item => {
  const itemToAdd = new libraryItem(item);
  return itemToAdd.save();
};
const getAllItems = () => {
  return libraryItem.find({});
};
const searchByType = typeName => {
  return libraryItem.find({ type: typeName });
};
module.exports = { addOneItem, getAllItems, searchByType };
