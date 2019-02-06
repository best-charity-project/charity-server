const fs = require('fs');
const api = require('../api')
const server = api.server

module.exports = {
    async createGalleryImage(req, res, next) {
        try {
            let timeStamp = (new Date()).getTime()
            if (req.body.imageData) {
                let data = req.body.imageData.replace(/^data:image\/\w+;base64,/, "");
                let buf = new Buffer(data, 'base64');
                fs.writeFile('./images/' + timeStamp + '.png', buf, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.status(200).json({
                            link: `${ server }/images/${timeStamp}.png`
                        })
                    }
                })
            }
        } catch (error) {
            next(error);
        }

    },

    async deleteGalleryImage(req, res, next) {
        try {
            let nameImage;
            for (let i = 0; i < req.body.length; i++) {
                if (typeof req.body[i] === 'object') {
                    nameImage = req.body[i].name.slice(req.body[i].name.lastIndexOf('/'))
                } else {
                    nameImage = req.body[i][0].slice(req.body[i][0].lastIndexOf('/'))
                }
                await fs.unlink('./images' + nameImage, function (err) {
                    if (err) {
                        console.log(err)
                    }
                });
            }
            res.status(200).send();
        } catch (error) {
            next(error);
        }
    },
}