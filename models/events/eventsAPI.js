const Events = require('./events');

const addEvents = events => {
  const eventsToAdd = new Events(events);
  return eventsToAdd.save();
};

const getEvents = query => {
  if (query.count) {
    return Events.find({ start: { $gte: new Date() } }).sort({ start: 1 }).limit(parseInt(query.count));
  }
  else {
    return Events.find();
  }
};

module.exports = {
  addEvents,
  getEvents,
};
