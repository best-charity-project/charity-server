const Locations = require('./locations');

const getLocations = () => Locations.find({});

module.exports = { getLocations };