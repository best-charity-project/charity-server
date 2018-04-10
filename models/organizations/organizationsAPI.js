const Organization = require('./organizations');

const addOrganization = organization => {
  organizationToAdd = new Organization(organization);
  return organizationToAdd.save();
};

const getOrganizations = () => Organization.find({});

module.exports = { addOrganization, getOrganizations };
