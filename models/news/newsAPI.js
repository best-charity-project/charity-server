const News = require('./news');

const addOneNews = news => {
  const newsToAdd = new News(news);
  return newsToAdd.save();
};

const getOneNews = id => News.findById(id);

const getAllNews = () => News.find({}, {}, { sort: { date: -1 } });

const updateNews = (id, updatedNews) =>
  News.findById(id).then(news => {
    news.set(updatedNews);
    return news.save();
  });

const deleteNews = id => News.findById(id).then(news => news.remove());

module.exports = { addOneNews, getOneNews, getAllNews, updateNews, deleteNews };
