const mongoose = require('../utils/db.utils');
const error = require('../utils/error');
const fs = require('fs');
const multer = require('multer'); 
const upload = multer();

module.exports = {
    async createImage(req, res) {
        console.log(req.body)
        /* let timeStamp = (new Date()).getTime()
        fs.writeFile('./images/' + timeStamp + '.png', function(err) {
            if (err) console.log(err);
        }); */
    },
}