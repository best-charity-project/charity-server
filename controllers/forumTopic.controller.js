const ForumTopicsModel = require('../schemas/forumTopics.schema');
const ForumGroupsModel = require('../schemas/forumGroups.schema');

module.exports = {
    async createTopic(req, res) {
        let forumTopic = new ForumTopicsModel(req.body);

        await ForumTopicsModel.create(forumTopic)
        .then((result) => {
            res.status(200).json({
                forumTopic: result
            });
        });
    },
   
    async getTopics(req, res) {
        await ForumTopicsModel.find()
        .populate('group_id').exec()
        .then(topics => {
            res.status(200).json({
                forumTopics: topics
            })
        })
    },

    async getTopicById(req, res) {
        let id = req.params.id
        await ForumTopicsModel.findById(id)
        .populate('group_id').exec()
        .then(topic => {
            res.status(200).json({
                forumTopic: topic 
            })
        })
    },

    async changeTopic(req, res) {
        let id = req.params.id
        let forumTopic = req.body
        await ForumTopicsModel.findByIdAndUpdate(id, forumTopic)
            .then(() => ForumTopicsModel.findById(id))
            .then((result) => {
                res.status(200).json({
                    forumTopic: result
                });
            });
    },

    async deleteTopicById(req, res) {
        let id = req.params.id
        ForumTopicsModel.findByIdAndRemove(id)
            .then((result) => {
                res.status(200).json({
                    forumTopic: result
                });
            });
    },
    
    async deleteTopics(req, res) {
        let deletedIds = []
        for (let i = 0; i < req.body.checkedTopicsIds.length; i++) {
            let deletedItem = await ForumTopicsModel.findByIdAndRemove(req.body.checkedTopicsIds[i])
            deletedIds.push(deletedItem._id)
        }
        res.status(200).json({
            forumTopics: deletedIds
        });
    }
}