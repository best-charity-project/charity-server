const mongoose = require('../utils/db.utils');
const error = require('../utils/error');
const NewsModel = require('../schemas/news.schema');

module.exports = {
    async createNews(req, res) {
        /* let subscrObject = req.body;
        SubscribeModel.create(subscrObject)
            .then((a) => {
                res.send(a);
            }) */
    },
    async getNews(req, res) {
        let admin = req.query.isAdmin
        let newsList = (admin) ? await NewsModel.find() : await NewsModel.find({isPublic: true})
        res.status(200).json({
            news: newsList
        });
    },
    async getNewsById(req, res) {
        let id = req.params.id
        let news = await NewsModel.findById(id)
        res.status(200).json({
            news: news 
        });
    },
    async changeNews(req, res) {
        let id = req.params.id
        let news = await NewsModel.findById(id)
        /* subscriber.toggleSubscribe() */
        news.save()
        res.status(200).json({
            news: news 
        });
    },
    async deleteNews(req, res) {
        let id = req.params.id
        let news = await NewsModel.findById(id)
        /* subscriber.toggleSubscribe() */
        /* news.save()
        res.status(200).json({
            news: news 
        }); */
    }
};