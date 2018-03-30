const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  regionDistricts: {
    type: Array,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  educationalInstitution: {
    type: String,
    required: true,
  },
  firstYear: {
    type: Number,
    required: true,
  },
  lastYear: {
    type: Number,
    required: true,
  },
  program: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Education = mongoose.model('education', EducationSchema);

module.exports = Education;
