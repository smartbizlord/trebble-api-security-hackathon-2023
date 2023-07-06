const mongoose = require("mongoose")
const Schema = mongoose.Schema


  const Countries = Schema({
    countryName: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: 0,
    },
  }, { timestamps: true });

  module.exports = Countries