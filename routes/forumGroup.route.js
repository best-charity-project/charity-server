const express = require('express');
const forumGroup = require('../controllers/forumGroup.controller');
const router = express.Router();
 
router.post('/', forumGroup.createGroup);
router.get('/', forumGroup.getGroups);
router.get('/:id', forumGroup.getGroupById);
router.put('/:id', forumGroup.changeGroup);
router.delete('/', forumGroup.deleteGroups);
router.delete('/:id', forumGroup.deleteGroupById);

module.exports = router;