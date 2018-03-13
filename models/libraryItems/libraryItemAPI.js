const libraryItem = require('./libraryItem');
const isValidQuery = require('./isValidLibraryQuery');

const addItem = item => {
  const itemToAdd = new libraryItem(item);
  return itemToAdd.save();
};

const getItems = searchQuery => {
  const { categoryTag, type } = searchQuery;
  if (categoryTag && isValidQuery(categoryTag) && type && isValidQuery(type)) {
    return libraryItem.find({ categoryTag, type });
  } else {
    return Promise.reject(new Error('Invalid queries'));
  }
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
module.exports = {
  fullTextSearch,
  addItem,
  getItems,
};
