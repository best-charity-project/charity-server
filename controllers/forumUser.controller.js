const ForumUsersModel = require('../schemas/forumUsers.schema');
const fs = require('fs');

module.exports = {
    async createUser(req, res) {
        let forumUser = new ForumUsersModel(req.body);
        if (req.body.imageData) {
            let data = req.body.imageData.replace(/^data:image\/\w+;base64,/, "");
            let buf = new Buffer(data, 'base64');
            let timeStamp = (new Date()).getTime()
            fs.writeFile('./images/' + timeStamp + '.png', buf, function(err) {
                if (err) console.log(err);
            });
            forumUser.avatar = timeStamp + '.png'
        }
        await ForumUsersModel.create(forumUser)
        .then((result) => {
            res.status(200).json({
                forumUser: result
            });
        });
    },
        
    async getUsers(req, res) {
        let forumUsersList = await ForumUsersModel.find()
        res.status(200).json({
            forumUsers: forumUsersList
        });
    },
    async getUserById(req, res) {
        let id = req.params.id
        let forumUser = await ForumUsersModel.findById(id)
        res.status(200).json({
            forumUser: forumUser 
        });
    },
    async changeUser(req, res) {
        let id = req.params.id
        let forumUser = req.body
        if (forumUser.imageData) {
            let previousForumUser = await ForumUsersModel.findById(id)
            fs.unlink('./images/' + previousForumUser.avatar, function (err) {
                if (err) {
                    return console.log(err)
                }
            }); 
            let data = forumUser.imageData.replace(/^data:image\/\w+;base64,/, "");
            let buf = new Buffer(data, 'base64');
            let timeStamp = (new Date()).getTime()
            fs.writeFile('./images/' + timeStamp + '.png', buf, function(err) {
                if (err) console.log(err);
            });
            forumUser.avatar = timeStamp + '.png'
        }
        await ForumUsersModel.findByIdAndUpdate(id, user)
            .then(() => ForumUsersModel.findById(id))
            .then((result) => {
                res.status(200).json({
                    forumUsers: result
                });
            });
    },
    async deleteUserById(req, res) {
        let id = req.params.id
        let previousForumUser = await ForumUsersModel.findById(id)
        if (previousForumUser.avatar) {
            fs.unlink('./images/' + previousForumUser.avatar, function (err) {
                if (err) {
                    return console.log(err)
                }
            }); 
        }
        ForumUsersModel.findByIdAndRemove(id)
            .then((result) => {
                res.status(200).json({
                    forumUsers: result
                });
            });
    },
    async deleteUsers(req, res) {
        let deletedIds = []
        for (let i = 0; i < req.body.checkedIds.length; i++) {
            let previousForumUser = await ForumUsersModel.findById(req.body.checkedIds[i])
            if (previousForumUser.avatar) {
                fs.unlink('./images/' + previousForumUser.avatar, function(err) {
                    if(err) {
                        return console.log(err)
                    }
                }); 
            }
            let deletedItem = await ForumUsersModel.findByIdAndRemove(req.body.checkedIds[i])
            deletedIds.push(deletedItem._id)
        }
        res.status(200).json({
            forumUsers: deletedIds
        });
    }
}
