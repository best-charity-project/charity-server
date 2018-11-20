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
    contactPerson: {
      type: String,
      required: true,
      trim: true
    },
    contacts: {
      email: {
        type: String,
        required: true,
        trim: true
      },
      phone: {
        type: String,
        required: true,
        trim: true
      }
    },
    location: {
      region: {
        type: String,
        required: true,
        trim: true
      },
      district: {
        type: String,
        required: true,
        trim: true
      },
      city: {
        type: String,
        required: true,
        trim: true
      }
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
