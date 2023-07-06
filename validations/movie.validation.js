const Joi = require('joi');

  const getWithPagination = {
    query: Joi.object().keys({
      page: Joi.string().required(),
      limit: Joi.string().required(),
      where: Joi.string(),
    }),
    body: Joi.object().keys({}),
  }

  const getById = {
    query: Joi.object().keys({}),
    body: Joi.object().keys({}),
  }

  const deleteById = {
    query: Joi.object().keys({}),
    body: Joi.object().keys({}),
  }

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

    const addMovieGenre = {
      body: Joi.object().keys({
        genreName: Joi.string().required(),
      }),
    };

    const addMovieCountry = {
      body: Joi.object().keys({
        countryName: Joi.string().required(),
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
        movieThumbNail: Joi.string().required(),
        movieLocation: Joi.string().required(),
        releaseYear: Joi.number().required(),
        movieCast: Joi.string().required(),
        movieCountry: Joi.string().required(),
        movieDirector: Joi.string().required(),
        movieDuration: Joi.number().required(),
        watchedBy: Joi.string(),
        isActive: Joi.number().required(),
        special: Joi.number().required(),
        genreId: Joi.string().required(),
      }),
  };

  const updateMovie = {
      body: Joi.object().keys({
        movieTitle: Joi.string(),
        movieDescription: Joi.string(),
        movieThumbNail: Joi.string(),
        releaseYear: Joi.number(),
        movieCast: Joi.string(),
        movieCountry: Joi.number(),
        movieDirector: Joi.string(),
        movieDuration: Joi.number(),
        isActive: Joi.number(),
        special: Joi.number(),
        genreId: Joi.number(),
      }),
  };

  module.exports = {
    getWithPagination,
    downloadMovie,
    getMoviesByGenre,
    getMoviesByYear,
    getSpecialMovies,
    uploadMovies,
    getById,
    addMovieGenre,
    addMovieCountry,
    deleteById,
    updateMovie,
  }