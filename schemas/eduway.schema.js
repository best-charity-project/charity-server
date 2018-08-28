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
      require: true,
      trim: true,
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Markers', Markers);
