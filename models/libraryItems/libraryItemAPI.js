const libraryItem = require('./libraryItem');
const isValidQuery = require('../utils/isValidLibraryQuery');
const isValidObjectId = require('../utils/isValidObjectId');

const addItem = item => {
  const itemToAdd = new libraryItem(item);
  return itemToAdd.save();
};

const getItems = searchQuery => {
  const { categoryTag, type } = searchQuery;
  if (categoryTag && isValidQuery(categoryTag) && type && isValidQuery(type)) {
    return libraryItem.find({
      categoryTag,
      type,
      approved: true,
    });
  }
  return Promise.reject(new Error('Invalid queries'));
};

const fullTextSearch = searchParams => {
  const types = JSON.parse(searchParams.types);
  if (
    searchParams.types &&
    searchParams.textSearch &&
    types.every(isValidQuery)
  ) {
    return libraryItem
      .find(
        {
          type: { $in: types },
          $text: { $search: searchParams.textSearch },
        },
        { score: { $meta: 'textScore' } },
    )
      .sort({ score: { $meta: 'textScore' } });
  } else {
    return Promise.reject(new Error('Invalid queries'));
  }
};

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
    return Promise.reject(new Error('Invalid news id'));
  }
};

const updateLibraryItem = (id, updatedData) =>
  getItemById(id).then(item => {
    item.set(updatedData);
    return item.save();
  });

module.exports = {
  fullTextSearch,
  addItem,
  getItems,
  getPendingItems,
  acceptPendingItem,
  deleteLibraryItem,
  getItemById,
  updateLibraryItem,
};
