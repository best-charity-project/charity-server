const mongoose = require('../utils/db.utils');
const error = require('../utils/error');
const fs = require('fs');
const api = require('../api')
const server = api.server

module.exports = {
    async createImage(req, res) {
        let data = req.file;
        let buf = new Buffer(data.buffer, 'hex');
        let timeStamp = (new Date()).getTime()
        await fs.writeFile('./images/' + timeStamp + '.png', buf, function(err) {
            if (err) {console.log(err);
            } else {
                res.status(200).json(
                    {link: `${server}/images/${timeStamp}.png`}
                )
            }
        })
    },
}