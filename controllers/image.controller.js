const mongoose = require('../utils/db.utils');
const error = require('../utils/error');
const fs = require('fs');

module.exports = {
    async createImage(req, res) {
        let data = req.file;
        let buf = new Buffer(data.buffer, 'hex');
        let timeStamp = (new Date()).getTime()
        fs.writeFile('./images/' + timeStamp + '.png', buf, function(err) {
            if (err) console.log(err);
        })
        res.status(200).json(
            {link: 'http://localhost:3001/images/' + timeStamp + '.png'}
        )
    },
}