const libraryItem = require('./libraryItem');

const addOneItem = item => {
  const itemToAdd = new libraryItem(item);
  return itemToAdd.save();
};
const getAllItems = () => libraryItem.find({});

const searchByType = typeName => libraryItem.find({ type: typeName });

const searchItemsInCategory = searchQuery => libraryItem.find(searchQuery);

const fullTextSearch = search =>
  libraryItem
    .find(
      {
        type: { $in: search.type.split('&') },
        $text: { $search: search.textSearch },
      },
      { score: { $meta: 'textScore' } },
    )
    .sort({ score: { $meta: 'textScore' } })
    .exec();

module.exports = {
  addOneItem,
  getAllItems,
  searchByType,
  searchItemsInCategory,
  fullTextSearch,
};
