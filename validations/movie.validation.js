const Joi = require('joi');

    const streamMovie = {
    headers: Joi.object().keys({
      range: Joi.string().required(),
    }),
    query: Joi.object().keys({
      movie: Joi.string().required(),
      token: Joi.string(),
    }),
  };

  const downloadMovie = {
    query: Joi.object().keys({
      movie: Joi.string().required(),
    })
  };

  const getMoviesByGenre = {
      body: Joi.object().keys({
        genre: Joi.string().required(),
      }),
    };

  const getMoviesByYear = {
      body: Joi.object().keys({
        movie: Joi.string().required(),
      }),
  };

  const getSpecialMovies = {
    query: Joi.object().keys({
      token: Joi.string().required(),
    }),
  };

  const uploadMovies = {
      body: Joi.object().keys({
        movieTitle: Joi.string().required(),
        movieDescription: Joi.string().required(),
        movieThumbnail: Joi.string().required(),
        releaseYear: Joi.number().required(),
        movieCast: Joi.string().required(),
        countryId: Joi.number().required(),
        movieDirector: Joi.string().required(),
        movieDuration: Joi.number().required(),
        watchedBy: Joi.string(),
        isActive: Joi.number().required(),
        special: Joi.number().required(),
        genreId: Joi.number().required(),
      }),
  };

  module.exports = {
    streamMovie,
    downloadMovie,
    getMoviesByGenre,
    getMoviesByYear,
    getSpecialMovies,
    uploadMovies,
  }