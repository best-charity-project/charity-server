const Education = require('./education');
const {
  isValidString,
  isValidYear,
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
    educationalInstitution: filterParams.educationalInstitution,
    firstYear: { $gte: filterParams.firstYear } && {
      $lte: filterParams.lastYear,
    },
    lastYear: { $lte: filterParams.lastYear } && {
      $gte: filterParams.firstYear,
    },
  };
  const validationCheck =
    isValidString(filterParams.region) &&
    isValidString(filterParams.regionDistricts) &&
    isValidString(filterParams.educationalInstitution) &&
    isValidYear(filterParams.firstYear) &&
    isValidYear(filterParams.lastYear);

  if (isValidString(filterParams.program)) {
    query.program = filterParams.program;
  }

  if (validationCheck) {
    return Education.find(query);
  }

  return Promise.reject(new Error('Invalid queries'));
};

const getEducation = query => {
  const { userId } = query;
  if (isValidObjectId(userId)) {
    return Education.find({ userId });
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
