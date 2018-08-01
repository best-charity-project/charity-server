const mongoose = require('mongoose');

const forumGroupsSchema = mongoose.Schema({
    groupTitle: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('forumGroups', forumGroupsSchema);