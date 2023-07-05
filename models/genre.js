const mongoose = require("mongoose")
const Schema = mongoose.Schema


  const Genres = Schema({
    genreName: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
    },
  }, { timestamps: true });

  module.exports = Genres