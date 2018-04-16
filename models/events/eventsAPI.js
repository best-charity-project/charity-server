const Events = require('./events');

const addEvents = events => {
  const eventsToAdd = new Events(events);
  return eventsToAdd.save();
};

const getEvents = () => Events.find();

module.exports = {
  addEvents,
  getEvents,
};
