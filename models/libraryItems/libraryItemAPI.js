const libraryItem = require('./libraryItem');
const isValidQuery = require('./isValidLibraryQuery');

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

<<<<<<< HEAD
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
=======
const getPendingItems = () => libraryItem.find({ approved: false });
>>>>>>> 9a31bd3ba0169085ea3ae01599d3b74b974dc831

module.exports = {
  fullTextSearch,
  addItem,
  getItems,
  getPendingItems,
};
