const mongoose = require('../utils/db.utils');
const error = require('../utils/error');
const NewsModel = require('../schemas/news.schema');
const fs = require('fs');

module.exports = {
    async createNews(req, res) {
        let a = req.body
        let timeStamp = (new Date()).getTime()
        let data = a.imageData.replace(/^data:image\/\w+;base64,/, "");
        let buf = new Buffer(data, 'base64');
        fs.writeFile('./images/' + timeStamp + '.png', buf, function(err) {
            if(err) {
                return console.log(err)
            }
        });
        a.image = '/images/' + timeStamp + '.png'
        let news = new NewsModel(a);
        NewsModel.create(news)
            .then((result) => {
                res.status(200).json({
                    news: result
                });
            });
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
        let previousNews = await NewsModel.findById(id)
        fs.unlink('.' + previousNews.image, function (err) {
            if (err) {
                return console.log(err)
            }
        });
        let a = req.body
        let timeStamp = (new Date()).getTime()
        let data = a.imageData.replace(/^data:image\/\w+;base64,/, "");
        let buf = new Buffer(data, 'base64');
        fs.writeFile('./images/' + timeStamp + '.png', buf, function(err) {
            if(err) {
                return console.log(err)
            }
        });
        a.image = '/images/' + timeStamp + '.png'
        NewsModel.findByIdAndUpdate(id, a)
            .then(() => NewsModel.findById(id))
            .then((result) => {
                res.status(200).json({
                    news: result
                });
            });
    },
    async deleteNews(req, res) {
        let id = req.params.id
        NewsModel.findByIdAndRemove(id)
            .then((result) => {
                res.status(200).json({
                    news: result
                });
            });
    }
}