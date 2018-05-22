const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users.controller');

router.post('/auth', userCtrl.auth);

module.exports = router;