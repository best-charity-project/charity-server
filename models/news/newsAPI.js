const News = require('./news');
const isValidObjectId = require('../utils/isValidObjectId');

const addOneNews = news => {
  const newsToAdd = new News(news);
  return newsToAdd.save();
};

const getNews = () => News.find({}, {}, { sort: { date: -1 } });

const getNewsById = id => {
  if (isValidObjectId(id)) {
    return News.findById(id);
  } else {
    return Promise.reject(new Error('Invalid news id'));
  }
};

const updateNews = (id, updatedNews) => {
  return getNewsById(id).then(news => {
    news.set(updatedNews);
    return news.save();
  });
};
const deleteNews = id => News.findById(id).then(news => news.remove());

module.exports = { addOneNews, getNews, getNewsById, updateNews, deleteNews };
