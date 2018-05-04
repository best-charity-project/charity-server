const libraryItem = require('./libraryItem');

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

const getItemsAmount = searchQuery =>
  libraryItem
    .count({
      ...searchQuery,
      approved: true,
    })
    .exec();

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

const getItemById = id => libraryItem.findById(id);

const updateLibraryItem = (id, updatedData) =>
  getItemById(id).then(item => {
    item.set(updatedData);
    return item.save();
  });

const moveItems = (fromCategory, toCategory) =>
  libraryItem.update(
    { categoryTag: fromCategory },
    { categoryTag: toCategory },
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
