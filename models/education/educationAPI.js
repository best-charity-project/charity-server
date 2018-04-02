const Education = require('./education');
const isValidObjectId = require('../utils/isValidObjectId');

const addEducation = education => {
  const educationToAdd = new Education(education);
  return educationToAdd.save();
};

const getEducation = query => {
  const { userId } = query;
  if (isValidObjectId(userId)) {
    return Education.find(query);
  }
};

const getEducationById = id => {
  if (isValidObjectId(id)) {
    return Education.findById(id);
  }
  return Promise.reject(new Error('Invalid educational route id'));
};

const updateEducation = (id, updatedEducation) => {
  return getEducationById(id).then(education => {
    education.set(updatedEducation);
    return education.save();
  });
}
const deleteEducation = id => Education.findById(id).then(education => education.remove());

module.exports = { addEducation, getEducation, getEducationById, updateEducation, deleteEducation };
