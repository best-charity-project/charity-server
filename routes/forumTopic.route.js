const express = require('express');
const forumTopic = require('../controllers/forumTopic.controller');
const router = express.Router();
 
router.post('/', forumTopic.createTopic);
router.get('/', forumTopic.getTopics);
router.get('/:id', forumTopic.getTopicById);
router.put('/:id', forumTopic.changeTopic);
router.delete('/', forumTopic.deleteTopics);
router.delete('/:id', forumTopic.deleteTopicById);

module.exports = router;