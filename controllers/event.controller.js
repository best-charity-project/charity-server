const EventsModel = require('../schemas/events.schema');

module.exports = {
  newEvent(req, res, next) {
    let a = req.body;
    let event = new EventsModel(a);
    return EventsModel.create(event, (err, createEvent) => {
      if (err) return next(err);
      res.send(createEvent);
    });
  },
  async deleteEvent(req, res, next) {
    await EventsModel.findByIdAndRemove(req.body, (err, result) => {
      if (err) return next(err);
      res.status(200).json({
        news: result
      });
    });
  },
  async getEvents(req, res, next) {
    await EventsModel.find((err, eventsList) => {
      if (err) return next(err);
      res.status(200).json({
        events: eventsList,
      });
    });

  },
  async getEvent(req, res, next) {
    let id = req.params.id;
    await EventsModel.findById(id, (err, event) => {
      if (err) return next(err);
      res.send(event);
    });
  },
  async UpdateEvent(req, res, next) {
    await EventsModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    }, (err, event) => {
      if (err) return next(err);
      return res.send(event);
    });
  },
};