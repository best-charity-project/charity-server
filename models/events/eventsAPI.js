const Events = require('./events');
const isValidNumber = require('../utils/isValidNumber');

const addEvents = events => {
  const eventsToAdd = new Events(events);
  return eventsToAdd.save();
};

const getEvents = query => {
  if (isValidNumber(query.count)) {
    console.log(query.count);
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
