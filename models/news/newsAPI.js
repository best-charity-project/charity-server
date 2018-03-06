const News = require('./news');

const addOneNews = news => {
  const newsToAdd = new News(news);
  return newsToAdd.save();
};

const getNews = query => News.find(query, {}, { sort: { date: -1 } });

const updateNews = (id, updatedNews) =>
  News.findById(id).then(news => {
    news.set(updatedNews);
    return news.save();
  });

const deleteNews = id => News.findById(id).then(news => news.remove());

module.exports = { addOneNews, getNews, updateNews, deleteNews };
