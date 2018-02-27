const News = require('./news');

const addOneNews = news => {
  const newsToAdd = new News(news);
  return newsToAdd.save();
};

const getOneNews = id => {
  return News.findById(id);
};

const getAllNews = () => {
  return News.find({});
};

const updateNews = (id, updatedNews) => {
  return News.findById(id).then(news => {
    news.set(updatedNews);
    return news.save();
  });
};

const deleteNews = id => {
  return News.findById(id).then(news => {
    return news.remove();
  });
};

module.exports = { addOneNews, getOneNews, getAllNews, updateNews, deleteNews };
