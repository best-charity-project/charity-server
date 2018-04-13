const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
  allDay: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
});

const Events = mongoose.model('event', EventsSchema);

module.exports = Events;
