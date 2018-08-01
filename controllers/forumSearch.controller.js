const ForumGroupsModel = require('../schemas/forumGroups.schema');
const ForumTopicsModel = require('../schemas/forumTopics.schema');

module.exports = {    
    async findInfo(req, res) {
        let groupsList = await ForumGroupsModel.find({groupTitle: {$regex: req.query.query, $options: 'i'}})
        let topicsList = await ForumTopicsModel
            .find({topicTitle: {$regex: req.query.query, $options: 'i'}})
            .populate('group_id').exec()
        for (let i = 0; i < topicsList.length; i++) {
            let group = await ForumGroupsModel.findById(topicsList[i].group_id._id)
            if (groupsList.every(item => {
                return item._id.toString() !== group._id.toString()           
            })) {
                groupsList.push(group)
            }
        }
      
        res.status(200).json({
            groupsList: groupsList,
            topicsList: topicsList
        });
    },
}