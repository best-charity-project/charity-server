const EdulistModel = require('../schemas/edulist.schema');

module.exports = {
  async createPerson(req, res) {
    let person = req.body;
    EdulistModel.create(person).then(resp => {
      res.send(resp);
    });
  },
  async getPersonListPublic(req, res) {
    let personsList = await EdulistModel.find({ isPublic: true });
    res.status(200).json({
      persons: personsList,
    });
  },  
  async getPersonListAll(req, res) {
    let personsList =  await EdulistModel.find();
    res.status(200).json({
      persons: personsList,
    });
  },
  async updatePerson(req, res) {
    let person = await EdulistModel.findByIdAndUpdate(
      req.params.id,
      { $set: { isPublic: !req.body.isPublic } },
      { new: true },
      (err, person) => {
        if (err) return res.send(500, err);
        return res.send(person);
      }
    );
  },
  async deletePerson(req, res) {
    await EdulistModel.findByIdAndRemove(req.params.id, (err, person) => {
      if (err) return res.send(500, err);
      return res.send(person);
    });
  }
};