const ForumPostsModel = require('../schemas/forumPosts.schema');

module.exports = {
    async createPost(req, res, next) {
        let forumPost = new ForumPostsModel(req.body);

        await ForumPostsModel.create(forumPost, (err, result) => {
            if (err) return next(err);
            res.status(200).json({
                forumPost: result
            });
        });
    },

    async getPosts(req, res, next) {
        try {
            let forumPostsList = await ForumPostsModel.find({
                    topic_id: req.query.query
                })
                .populate('topic_id').exec()
            res.status(200).json({
                forumPosts: forumPostsList
            });
        } catch (error) {
            next(error);
        }

    },
    async getPostById(req, res, next) {
        try {
            let id = req.params.id
            let forumPost = await ForumPostsModel.findById(id)
                .populate('group_id').exec()
            res.status(200).json({
                forumPost: forumPost
            });
        } catch (error) {
            next(error);
        }
    },
    async changePost(req, res, next) {
        try {
            let id = req.params.id
            let forumPost = req.body
            await ForumPostsModel.findByIdAndUpdate(id, forumPost)
                .then(() => ForumPostsModel.findById(id))
                .then((result) => {
                    res.status(200).json({
                        forumPost: result
                    });
                });
        } catch (error) {
            next(error);
        }

    },
    async deletePostById(req, res, next) {
        let id = req.params.id
        await ForumPostsModel.findByIdAndRemove(id, (err, result) => {
            if (err) return next(err);

            res.status(200).json({
                forumPost: result
            });
        });
    },
    async deletePosts(req, res, next) {
        try {
            let deletedIds = []
            for (let i = 0; i < req.body.checkedIds.length; i++) {
                let deletedItem = await ForumPostsModel.findByIdAndRemove(req.body.checkedIds[i])
                deletedIds.push(deletedItem._id)
            }
            res.status(200).json({
                forumPosts: deletedIds
            });
        } catch (error) {
            next(error);
        }
    }
}
