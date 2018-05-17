const express = require('express');
let router = express.Router();

router.use('/', (req, res, next) => {
    res.send('Hell...');
    res.end();
})

module.exports = router;