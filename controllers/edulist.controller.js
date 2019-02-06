const EdulistModel = require('../schemas/edulist.schema');

module.exports = {
  async createPerson(req, res, next) {
    try {
      let person = req.body;
      const resp = await EdulistModel.create(person);
      res.send(resp);
    }
    catch(err) {
      next(err)
    }
  },

  getPersonListPublic(req, res, next) {
    return EdulistModel.find({
      isPublic: true
    }, (err, list) => {
      if (err) return next(err);
      res.status(200).json({
        persons: list,
      });
    });

  },

  getPersonListAll(req, res, next) {
    return EdulistModel.find((err, list) => {
      if (err) return next(err);
      res.status(200).json({
        persons: list,
      });
    });
  },

  updatePerson(req, res, next) {
    return EdulistModel.findByIdAndUpdate(
      req.params.id, {
        $set: {
          isPublic: !req.body.isPublic
        }
      }, {
        new: true
      },
      (err, person) => {
        if (err) return next(err);
        res.send(person);
      }
    );
  },

  deletePerson(req, res, next) {
    return EdulistModel.findByIdAndRemove(req.params.id, (err, person) => {
      if (err) return next(err);
      res.send(person);
    });
  }
};