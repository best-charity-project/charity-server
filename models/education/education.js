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
  regionDistrict: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  cityDistrict: {
    type: String,
  },
  educationalInstitiution: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  programm: {
    type: String,
  },
});

const Education = mongoose.model('education', EducationSchema);
module.exports = Education;
