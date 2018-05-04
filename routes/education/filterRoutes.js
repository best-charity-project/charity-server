const { filterRoutes } = require('../../models/education/educationAPI');
const {
  isValidString,
  isValidYear,
} = require('../../models/utils/isValidEducationalRouteQuery');

const isValidFilterQuery = query => {
  const {
    region,
    regionDistricts,
    educationalInstitution,
    firstYear,
    lastYear,
  } = query;

  if (
    !isValidString(region) &&
    !isValidString(regionDistricts) &&
    !isValidString(educationalInstitution) &&
    !isValidYear(firstYear) &&
    !isValidYear(lastYear)
  ) {
    return false;
  }

  if (query.program && !isValidString(query.program)) {
    return false;
  }
  return true;
};

module.exports = router => {
  router.route('/filter').get((req, res) => {
    const {
      region,
      regionDistricts,
      educationalInstitution,
      firstYear,
      lastYear,
    } = req.query;

    const query = {
      region,
      regionDistricts,
      educationalInstitution,
      firstYear,
      lastYear,
    };

    if (req.query.program) {
      query.program = program;
    }

    if (!isValidFilterQuery(query)) {
      return res.status(400).json({
        message: 'Проверьте правильность введенных данных',
      });
    }

    filterRoutes(query)
      .then(items => {
        res.json(items);
      })
      .catch(err => {
        res.status(500).json({
          message: 'Запрос не может быть обработан. Повторите попытку позже',
        });
      });
  });
  return router;
};
