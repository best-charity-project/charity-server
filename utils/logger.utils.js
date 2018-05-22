const path = require('path');
const moment = require('moment');
const fs = require('fs')

let logger = (data) => {
    let fileName = 'api.' + moment().format('MM-DD-YYYY') + '.log';
    let logFilePath = path.join(process.env.NODE_PATH, 'logs', fileName);

    if (fs.existsSync(logFilePath)) {
        fs.appendFile(logFilePath, '\n' + data, function (err) {
            if (err) throw err;
        });
    } else {
        fs.writeFile(logFilePath, data, {
            flag: 'wx'
        }, function (err) {
            if (err) throw err;
        });
    }
}



module.exports = logger;