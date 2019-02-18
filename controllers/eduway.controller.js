const MarkersModel = require('../schemas/eduway.schema');

module.exports = {
  async getPublicMarkers(req, res, next) {
    try {
      let markersList = await MarkersModel.find({ isPublic: true });
    res.status(200).json({
      markers: markersList,
    });
    } catch (error) {
      next(error);
    }
  },
  async getMarkers(req, res, next) {
    await MarkersModel.find((err, list) => {
      if (err) return next(err);
      res.status(200).json({
        markers: list,
      });
    });
  },
  async createMarker(req, res, next) {
    let marker = req.body;
    await MarkersModel.create(marker, (err, resp) => {
      if (err) return next(err);
      res.send(resp);
    });
  },

  async updateMarker(req, res, next) {
    await MarkersModel.findByIdAndUpdate(
      req.params.id, {
        $set: {
          isPublic: !req.body.isPublic
        }
      }, {
        new: true
      },
      (err, marker) => {
        if (err) return next(err);
        return res.send(marker);
      }
    );
  },
  async deleteMarker(req, res, next) {
    await MarkersModel.findByIdAndRemove(req.params.id, (err, marker) => {
      if (err) return next(err);
      return res.send(marker);
    });
  },
};