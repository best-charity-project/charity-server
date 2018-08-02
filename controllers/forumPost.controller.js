const ForumPostsModel = require('../schemas/forumPosts.schema');

module.exports = {
    async createPost(req, res) {
        let forumPost = new ForumPostsModel(req.body);

        await ForumPostsModel.create(forumPost)
        .then((result) => {
            res.status(200).json({
                forumPost: result
            });
        });
    },
        
    async getPosts(req, res) {
        let forumPostsList = await ForumPostsModel.find()
        res.status(200).json({
            forumPosts: forumPostsList
        });
    },
    async getPostById(req, res) {
        let id = req.params.id
        let forumPost = await ForumPostsModel.findById(id)
        res.status(200).json({
            forumPost: forumPost 
        });
    },
    async changePost(req, res) {
        let id = req.params.id
        let forumPost = req.body
        await ForumPostsModel.findByIdAndUpdate(id, forumPost)
            .then(() => ForumPostsModel.findById(id))
            .then((result) => {
                res.status(200).json({
                    forumPost: result
                });
            });
    },
    async deletePostById(req, res) {
        let id = req.params.id
        ForumPostsModel.findByIdAndRemove(id)
            .then((result) => {
                res.status(200).json({
                    forumPost: result
                });
            });
    },
    async deletePosts(req, res) {
        let deletedIds = []
        for (let i = 0; i < req.body.checkedIds.length; i++) {
            let deletedItem = await ForumPostsModel.findByIdAndRemove(req.body.checkedIds[i])
            deletedIds.push(deletedItem._id)
        }
        res.status(200).json({
            forumPosts: deletedIds
        });
    }
}