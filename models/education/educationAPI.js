const Education = require('./education');
const isValidQuery = require('../utils/isValidLibraryQuery');

const addEducation = education => {
  const educationToAdd = new Education(education);
  return educationToAdd.save();
};

const filterRoutes = filterParams => {
  if (filterParams) {
    return Education.find({
      region: filterParams.region,
      regionDistricts: filterParams.regionDistricts,
      city: filterParams.city,
      educationalInstitution: filterParams.educationalInstitution,
      firstYear: { $gte: filterParams.firstYear },
      lastYear: { $lte: filterParams.lastYear },
    });
  }
  return Promise.reject(new Error('Invalid queries'));
};

module.exports = { addEducation, filterRoutes };
