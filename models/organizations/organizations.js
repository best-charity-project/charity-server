const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrganizationsSchema = new Schema({
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  contacts: { type: String, required: true },
  url: { type: String },
});

const Organization = mongoose.model('organization', OrganizationsSchema);

module.exports = Organization;
