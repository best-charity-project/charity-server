const Education = require('./education');

const addEducation = education => {
  const educationToAdd = new Education(education);
  return educationToAdd.save();
};

const filterRoutes = filterParams => {
  const query = {
    region: filterParams.region,
    regionDistricts: filterParams.regionDistricts,
    educationalInstitution: filterParams.educationalInstitution,
    firstYear: {
      $lte: filterParams.lastYear,
    },
    lastYear: {
      $gte: filterParams.firstYear,
    },
  };

  return Education.find(query);
};

const getEducation = query => Education.find(query);

const getEducationById = id => Education.findById(id);

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
