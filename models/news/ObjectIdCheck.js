const mongoose = require('mongoose');

const validateObjectId = id => mongoose.Types.ObjectId.isValid(id);

module.exports = validateObjectId;
