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
    },
    movieCast : {
      type: String,
      required: true,
    },
    movieCountry : {
      type: mongoose.ObjectId,
      ref: 'Country',
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
      default: 0
    },
    special: {
      type: Boolean,
      default: 0
    },
    genreId: {
      type: mongoose.ObjectId,
      ref: 'Genre',
      required: true,
    }
  }, { timestamps: true });

  module.exports = Movies
