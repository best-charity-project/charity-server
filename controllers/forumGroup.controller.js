const mongoose = require('../utils/db.utils');
const error = require('../utils/error');
const ForumGroupsModel = require('../schemas/forumGroups.schema');
const ForumTopicsModel = require('../schemas/forumTopics.schema');

module.exports = {
    async createGroup(req, res) {
        let forumGroup = new ForumGroupsModel(req.body);

        await ForumGroupsModel.create(forumGroup)
        .then((result) => {
            res.status(200).json({
                forumGroup: result
            });
        });
    },
        
    async getGroups(req, res) {
        let forumGroupsList = await ForumGroupsModel.find()
        res.status(200).json({
            forumGroups: forumGroupsList
        });
    },

    async getGroupById(req, res) {
        let id = req.params.id
        let forumGroup = await ForumGroupsModel.findById(id)
        res.status(200).json({
            forumGroup: forumGroup 
        });
    },

    async changeGroup(req, res) {
        let id = req.params.id
        let forumGroup = req.body
        await ForumGroupsModel.findByIdAndUpdate(id, forumGroup)
            .then(() => ForumGroupsModel.findById(id))
            .then((result) => {
                res.status(200).json({
                    forumGroup: result
                });
            });
    },
    
    async deleteGroupById(req, res) {
        let id = req.params.id
        ForumTopicsModel.remove({group_id: id}, () => {})
        ForumGroupsModel.findByIdAndRemove(id)
            .then((result) => {
                res.status(200).json({
                    forumGroup: result
                });
            });
    },

    async deleteGroups(req, res) {
        let deletedIds = []
        for (let i = 0; i < req.body.checkedGroupsIds.length; i++) {
            ForumTopicsModel.remove({group_id: req.body.checkedGroupsIds[i]}, () => {})
            let deletedItem = await ForumGroupsModel.findByIdAndRemove(req.body.checkedGroupsIds[i])
            deletedIds.push(deletedItem._id)
        }
        res.status(200).json({
            forumGroups: deletedIds
        });
    }
}
