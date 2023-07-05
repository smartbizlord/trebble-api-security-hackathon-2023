const httpStatus = require('http-status');
const moment = require('moment');
const tokenService = require('./token.service');
const userService = require('./user.service');
const { dB } = require('../models');
const ApiError = require('../utils/ApiError');
const { tokenTypes } = require('../config/tokens');
const fs = require('fs');
const auth = require('../config/auth');

const moviesWithoutAuth = async () => {
        const movies = await dB.movies.findAll({
            isActive: true,
            special: false,
        })
        return movies;
};

const getGenres = async () => {
    const genres = await dB.genres.findAll({
        isActive: true,
    })
    return genres;
};

const getCountries = async () => {
    const countries = await dB.countries.findAll({
        isActive: true,
    })
    return countries;
};

const updateMovie = async (_id, body) => {
    const movie = await dB.movies.findOneAndUpdate({_id}, body, {new: true})
    return movie;
};

const deleteMovie = async (id) => {
    const movie = await dB.movies.findByIdAndDelete(id)
    return movie;
};

const deleteGenre = async (id) => {
    const genre = await dB.genres.findByIdAndDelete(id)
    return genre;
};

const deleteCountry = async (id) => {
    const country = await dB.countries.findByIdAndDelete(id)
    return country;
};

const moviesWithoutAuthById = async (_id) => {
    const movies = await dB.movies.findOne({
        _id
    })
    return movies;
};

const getGenresById = async (_id) => {
const genres = await dB.genres.findOne({
    _id
})
return genres;
};

const getCountriesById = async (_id) => {
const countries = await dB.countries.findOne({
    _id
})
return countries;
};
const addGenres = async (genreBody) => {
    return dB.genres.create(genreBody)
}
const addCountries = async (countryBody) => {
    return dB.countries.create(countryBody)
}



module.exports = {
    moviesWithoutAuth,
    getGenres,
    getCountries,
    moviesWithoutAuthById,
    getGenresById,
    getCountriesById,
    addGenres,
    addCountries,
    updateMovie,
    deleteMovie,
    deleteGenre,
    deleteCountry,
}