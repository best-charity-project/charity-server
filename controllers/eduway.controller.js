const MarkersModel = require('../schemas/eduway.schema');

module.exports = {
  async getPublicMarkers(req, res) {
    let markersList = await MarkersModel.find({ isPublic: true });
    res.status(200).json({
      markers: markersList,
    });
  },
  async getMarkers(req, res) {
    let markersList = await MarkersModel.find();
    res.status(200).json({
      markers: markersList,
    });
  },
  async createMarker(req, res) {
    let marker = req.body;
    MarkersModel.create(marker).then(resp => {
      res.send(resp);
    });
  },
  async updateMarker(req, res) {
    let marker = await MarkersModel.findByIdAndUpdate(
      req.params.id,
      { $set: { isPublic: !req.body.isPublic } },
      { new: true },
      (err, marker) => {
        if (err) return res.send(500, err);
        return res.send(marker);
      }
    );
  },
  async deleteMarker(req, res) {
    await MarkersModel.findByIdAndRemove(req.params.id, (err, marker) => {
      if (err) return res.send(500, err);
      return res.send(marker);
    });
  },
};
