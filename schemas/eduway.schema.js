const mongoose = require('../utils/db.utils');

const Markers = new mongoose.Schema(
  {
    coords: {
      type: Array,
      required: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    size: {
      type: Number
    },
    shift: {
      type: Number
    },
    expertise: {
      type: Boolean,
      default: false
    },
    transportation: {
      type: Boolean,
      default: false
    },
    parking: {
      type: Boolean,
      default: false
    },
    entrance: {
      type: Boolean,
      default: false
    },
    wc: {
      type: Boolean,
      default: false
    },
    elevator: {
      type: Boolean,
      default: false
    },
    relaxRoom: {
      type: Boolean,
      default: false
    },
    isPublic: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Markers', Markers);
