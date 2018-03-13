const Education = require('./education');

const addEducation = education => {
  const educationToAdd = new Education(education);
  return educationToAdd.save();
};

module.exports = { addEducation };