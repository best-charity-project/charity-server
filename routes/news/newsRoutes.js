const addNews = require('./addNews');
const getNews = require('./getNews');
const getNewsById = require('./getNewsbyId');
const updateNews = require('./updateNews');
const deleteNews = require('./deleteNews');

const newsRoutes = router => {
  router = getNews(router);
  router = addNews(router);
  router = getNewsById(router);
  router = updateNews(router);
  router = deleteNews(router);
  return router;
};

module.exports = newsRoutes;
