const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationsSchema = new Schema({
  district: { type: Array, required: true },
  name: { type: String, required: true },
  _id: { type: String, required: true },
});

const Locations = mongoose.model('regions', locationsSchema);

module.exports = Locations;
