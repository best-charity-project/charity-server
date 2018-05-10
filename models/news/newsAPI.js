const News = require('./news');

const addOneNews = news => {
  const newsToAdd = new News(news);
  return newsToAdd.save();
};

const getNews = () => News.find({}, {}, { sort: { date: -1 } });

const getNewsById = id => News.findById(id);

const updateNews = (id, updatedNews) =>
  getNewsById(id).then(news => {
    news.set(updatedNews);
    return news.save();
  });

const deleteNews = id => News.findById(id).then(news => news.remove());

module.exports = { addOneNews, getNews, getNewsById, updateNews, deleteNews };
