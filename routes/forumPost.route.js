const express = require('express');
const forumPost = require('../controllers/forumPost.controller');
const router = express.Router();
 
router.post('/', forumPost.createPost);
router.get('/', forumPost.getPosts);
router.get('/:id', forumPost.getPostById);
router.put('/:id', forumPost.changePost);
router.delete('/', forumPost.deletePosts);
router.delete('/:id', forumPost.deletePostById);

module.exports = router;