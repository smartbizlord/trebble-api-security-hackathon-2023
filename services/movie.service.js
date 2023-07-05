const httpStatus = require('http-status');
const moment = require('moment');
const tokenService = require('./token.service');
const userService = require('./user.service');
const { dB } = require('../models');
const ApiError = require('../utils/ApiError');
const { tokenTypes } = require('../config/tokens');
const fs = require('fs');
const auth = require('../config/auth');

const moviesWithoutAuth = async (limit, page) => {
        const usersCount = await dB.countries.estimatedDocumentCount({
            isActive: true,
            special: false,
        })
        const movies = await dB.movies.find({
            isActive: true,
            special: false,
        })
        .skip(page * limit || 0)
        .limit(limit || 5)
        const count = limit || 5
        page = page || 0
        const totalPage = usersCount / count
        return {movies, total: usersCount, page, count, totalPage};
};

const getGenres = async (limit, page) => {
    const usersCount = await dB.countries.estimatedDocumentCount({
        isActive: true,
    })
    const genres = await dB.genres.find({
        isActive: true,
    })
    .skip(page * limit || 0)
    .limit(limit || 5)
    const count = limit || 5
    page = page || 0
    const totalPage = usersCount / count
    return {genres, total: usersCount, page, count, totalPage};
};

const getCountries = async (limit, page) => {
    const usersCount = await dB.countries.estimatedDocumentCount({
        isActive: true,
    })
    const countries = await dB.countries.find({
        isActive: true,
    })
    .skip(page * limit || 0)
    .limit(limit || 5)
    const count = limit || 5
    page = page || 0
    const totalPage = usersCount / count
    return {countries, total: usersCount, page, count, totalPage};
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
    console.log(movies)
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