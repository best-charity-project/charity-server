const crypto = require('crypto');

let current_date = (new Date()).valueOf().toString();
let random = Math.random().toString();
let hash = crypto.createHash("sha1").update(current_date + random).digest("hex");

module.exports = hash;