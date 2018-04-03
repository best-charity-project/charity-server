const Education = require('./education');
const {
  isValidString,
  isValidNumber,
} = require('../utils/isValidEducationalRouteQuery');
const isValidObjectId = require('../utils/isValidObjectId');

const addEducation = education => {
  const educationToAdd = new Education(education);
  return educationToAdd.save();
};

const filterRoutes = filterParams => {
  const query = {
    region: filterParams.region,
    regionDistricts: filterParams.regionDistricts,
    city: filterParams.city,
    educationalInstitution: filterParams.educationalInstitution,
    firstYear: { $gte: filterParams.firstYear },
    lastYear: { $lte: filterParams.lastYear },
  };
  const check =
    isValidString(filterParams.region) &&
    isValidString(filterParams.regionDistricts) &&
    isValidString(filterParams.city) &&
    isValidString(filterParams.educationalInstitution) &&
    isValidNumber(filterParams.firstYear) &&
    isValidNumber(filterParams.lastYear);
  if (filterParams.program && isValidString(filterParams.program) && check) {
    query.program = filterParams.program;
    return Education.find(query);
  }
  if (check) {
    return Education.find(query);
  }
  return Promise.reject(new Error('Invalid queries'));
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
  return Promise.reject(
    new Error('Некоректный ID карты образовательного маршрута'),
  );
};

const updateEducation = (id, updatedEducation) => {
  return getEducationById(id).then(education => {
    education.set(updatedEducation);
    return education.save();
  });
};
const deleteEducation = id =>
  Education.findById(id).then(education => education.remove());

module.exports = {
  addEducation,
  filterRoutes,
  getEducation,
  getEducationById,
  updateEducation,
  deleteEducation,
};
