const ForumGroupsModel = require('../schemas/forumGroups.schema');
const ForumTopicsModel = require('../schemas/forumTopics.schema');

module.exports = {    
    async findInfo(req, res) {
        let groupsList = await ForumGroupsModel.find()
        let topicsList = await ForumTopicsModel.find()
        res.status(200).json({
            groupsList: groupsList,
            topicsList: topicsList
        });
    },
}