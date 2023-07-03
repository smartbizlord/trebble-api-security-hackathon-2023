const mongoose = require("mongoose")
const Schema = mongoose.Schema


  const Genres = Schema({
    genreName: {
      type: String,
      required: true,
      trim: true,
    },
    genreUId : {
      type: String,
      required: true,
      minLength : 8,
    },
    isActive: {
      type: Boolean,
    },
  }, { timestamps: true });

  module.exports = Genres