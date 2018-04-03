const Education = require('./education');
const {
  isValidString,
  isValidNumber,
} = require('../utils/isValidEducationalRouteQuery');

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

module.exports = { addEducation, filterRoutes };
