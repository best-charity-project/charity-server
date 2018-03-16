const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationsSchema = new Schema({
  district: { type: Array, required: true },
  name: { type: String, required: true },
});

const Locations = mongoose.model('locations', locationsSchema);

module.exports = Locations;
