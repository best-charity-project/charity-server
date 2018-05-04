const libraryItem = require('./libraryItem');
const isValidObjectId = require('../utils/isValidObjectId');

const addItem = item => {
  const itemToAdd = new libraryItem(item);
  return itemToAdd.save();
};

const getItems = ({ categoryTag, type }) =>
  libraryItem.find({
    categoryTag,
    type,
    approved: true,
  });

const getItemsAmount = searchQuery => {
  return libraryItem
    .count({
      ...searchQuery,
      approved: true,
    })
    .exec();
};

const fullTextSearch = ({ textSearch, types }) =>
  libraryItem
    .find(
      {
        type: { $in: types },
        $text: { $search: textSearch },
      },
      { score: { $meta: 'textScore' } },
    )
    .sort({ score: { $meta: 'textScore' } });

const getPendingItems = () => libraryItem.find({ approved: false });

const acceptPendingItem = id =>
  libraryItem.findById(id).then(item => {
    item.set({ approved: true });
    item.save();
  });

const deleteLibraryItem = id =>
  libraryItem.findById(id).then(item => item.remove());

const getItemById = id => {
  if (isValidObjectId(id)) {
    return libraryItem.findById(id);
  } else {
    return Promise.reject(new Error('Invalid library item id'));
  }
};

const updateLibraryItem = (id, updatedData) =>
  getItemById(id).then(item => {
    item.set(updatedData);
    return item.save();
  });

const moveItems = (from, to) =>
  libraryItem.update(
    { categoryTag: from },
    { categoryTag: to },
    { multi: true },
  );

const deleteItems = query => libraryItem.remove(query);

module.exports = {
  fullTextSearch,
  addItem,
  getItems,
  getPendingItems,
  acceptPendingItem,
  deleteLibraryItem,
  getItemById,
  updateLibraryItem,
  getItemsAmount,
  moveItems,
  deleteItems,
};
