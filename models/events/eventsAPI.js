const Events = require('./events');

const addEvents = events => {
  const eventsToAdd = new Events(events);
  return eventsToAdd.save();
};

const getEvents = query => {
  if (query.count) {
    return Events.find({ start: { $gte: new Date() } })
      .sort({ start: 1 })
      .limit(parseInt(query.count));
  }
  return Events.find();
};

const getEventById = id => Events.findById(id);

module.exports = {
  addEvents,
  getEvents,
  getEventById,
};
