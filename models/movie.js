const validator = require('validator');
const mongoose = require("mongoose")
const Schema = mongoose.Schema

  const Movies = Schema({
    movieTitle: {
      type: String,
      required: true,
      trim: true,
    },
    movieDescription: {
      type: String,
      required: true,
      trim: true,
      min: 100,
    },
    movieThumbNail : {
      type: String,
      required: true,
      min : 15
    },
    movieLocation : {
      type: String,
      required: true,
    },
    releaseYear : {
      type: String,
      required: true,
      validate: {
        validator(value) {
          if (value.length > 4 || value.length < 4 || (!(Number(value) > 0) || !(Number(value) < 0)) || value <= 1894) {
            return false
          } else {
            return true
          }
        },
        message: 'this must be a valid release year',
      }
    },
    movieCast : {
      type: String,
      required: true,
    },
    movieCountry : {
      type: String,
      required: true,
    },
    movieDirector : {
      type: String,
      required: true,
    },
    movieDuration: {
      type: String,
      required: true,
      trim: true,
    },
    watchedBy : {
      type: [String],
    },
    isActive: {
      type: Boolean,
    },
    special: {
      type: Boolean,
    },
    genreId: {
      type: mongoose.ObjectId,
      ref: 'Genre'
    }
  }, { timestamps: true });

  module.exports = Movies
