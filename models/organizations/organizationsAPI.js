const Organization = require('./organizations');

const addOrganization = organization => {
  organizationToAdd = new Organization(organization);
  return organizationToAdd.save();
};

const getOrganizations = () =>
  Organization.find({
    approved: true,
  });

const getPendingOrganizations = () => Organization.find({ approved: false });

const acceptPendingOrganization = id =>
  Organization.findById(id).then(item => {
    item.set({ approved: true });
    item.save();
  });

const deleteOrganization = id =>
  Organization.findById(id).then(item => item.remove());

module.exports = {
  addOrganization,
  getOrganizations,
  getPendingOrganizations,
  acceptPendingOrganization,
  deleteOrganization,
};
