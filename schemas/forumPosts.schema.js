const mongoose = require('mongoose');

const forumPostsSchema = mongoose.Schema({
	topic_id: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'forumTopics',
		required: true,
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'forumUsers',
	},
	content: {
		type: String,
		required: true,
	},
	like: {
		type: Number,
	},
	dislike: {
		type: Number,
	},
	reason: {
		type: String,
	}
},
{
    timestamps: true,
});

module.exports = mongoose.model('forumPosts', forumPostsSchema);