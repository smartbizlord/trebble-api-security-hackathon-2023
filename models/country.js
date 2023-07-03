const mongoose = require("mongoose")
const Schema = mongoose.Schema

  const Countries = Schema({
    countryName: {
      type: String,
      required: true,
      trim: true,
    },
    countryUId : {
      type: String,
      required: true,
      min : 8,
    },
    isActive: {
      type: Boolean,
    },
  }, { timestamps: true });

  module.exports = Countries