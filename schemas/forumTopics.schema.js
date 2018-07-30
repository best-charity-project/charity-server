const mongoose = require('mongoose');

const forumTopicsSchema = mongoose.Schema({
	group_id: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'forumGroups',
		required: true,
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'forumUsers',
		required: true,
	},
	topicTitle: {
		type: String,
		required: true,
		trim: true,
	},
	like: {
		type: Number,
	},
	dislike: {
		type: Number,
	},
},
{
    timestamps: true,
});

module.exports = mongoose.model('forumTopics', forumTopicsSchema);