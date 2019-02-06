const ForumGroupsModel = require('../schemas/forumGroups.schema');
const ForumTopicsModel = require('../schemas/forumTopics.schema');
const ForumPostsModel = require('../schemas/forumPosts.schema');
const ForumUsersModel = require('../schemas/forumUsers.schema');

module.exports = {    
    async getInfo(req, res, next) {
        try {
            let groupsLength = await ForumGroupsModel.count({})
            let topicsLength = await ForumTopicsModel.count({})
            let postsLength = await ForumPostsModel.count({})
            let usersLength = await ForumUsersModel.count({})
            res.status(200).json({
                forumGroups: groupsLength,
                forumTopics: topicsLength,
                forumPosts: postsLength,
                forumUsers: usersLength
            });
        }
        catch(err) {
            next(err)
        }
        
    },
}