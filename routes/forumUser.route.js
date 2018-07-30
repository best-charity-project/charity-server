const express = require('express');
const forumUser = require('../controllers/forumUser.controller');
const router = express.Router();
const multer = require('multer'); 
const upload = multer({
    limits: { fieldSize: 25 * 1024 * 1024 }
});

router.post('/', upload.array(), forumUser.createUser);
router.get('/', forumUser.getUsers);
router.get('/:id', forumUser.getUserById);
router.put('/:id', upload.array(), forumUser.changeUser);
router.delete('/', forumUser.deleteUsers);
router.delete('/:id', forumUser.deleteUserById);

module.exports = router;