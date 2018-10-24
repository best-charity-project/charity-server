const mongoose = require('../utils/db.utils');

const Edulist = new mongoose.Schema(
  {
    isPublic: {
      type: Boolean,
      default: false,
    },
    diagnosis: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    contactPerson: {
      type: String,
      required: true,
      trim: true
    },
    contacts: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    years: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Edulist', Edulist);