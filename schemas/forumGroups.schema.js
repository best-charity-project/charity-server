const mongoose = require('mongoose');

const forumGroupsSchema = mongoose.Schema({
    groupTitle: {
        type: String,
        required: true,
    },
});

// forumGroupsSchema
//     .pre('remove', function(next) {
//         this.model('forumTopics').remove({group_id: this._id}, next);
// });

module.exports = mongoose.model('forumGroups', forumGroupsSchema);