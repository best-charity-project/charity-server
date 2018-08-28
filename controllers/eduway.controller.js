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
    console.log(req.params.id);
    // let marker = await MarkersModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, event) => {
    //   if (err) return res.status(500).send(err);
    //   return res.send(event);
    // });
  },
  async deleteMarker(req, res) {
    console.log(req.params.id);
  },
};
