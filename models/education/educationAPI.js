const Education = require('./education');
const isValidObjectId = require('../utils/isValidObjectId');

const addEducation = education => {
  const educationToAdd = new Education(education);
  return educationToAdd.save();
};

const getEducationByUserId = userId => {
  return Education.find({ userId });
};

const getEducationById = id => {
  if (isValidObjectId(id)) {
    return education.findById(id);
  } else {
    return Promise.reject(new Error('Invalid educational route id'));
  }
};

const updateEducation = (id, updatedNews) =>
  getEducationById(id).then(education => {
    education.set(updatedNews);
    return education.save();
    console.log(updatedNews)
  });

const deleteEducation = id => Education.findById(id).then(Education => Education.remove());

module.exports = { addEducation, getEducationByUserId, getEducationById, updateEducation, deleteEducation };
