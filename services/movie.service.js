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
            where: {
                isActive: true,
                special: false,
            },
            include: {
                genre,
                country,
            }
        })
        return movies;
};

const getGenres = async () => {
    const genres = await dB.genres.findAll({
        where: {
            isActive: true,
        }
    })
    return genres;
};

const getCountries = async () => {
    const countries = await dB.countries.findAll({
        where: {
            isActive: true,
        }
    })
    return countries;
};

const moviesWithAuth = async () => {
    try {
        const movies = await dB.movies.findAll({
            where: {
                isActive: true,
            },
            include: "genre"
        })
        return movies;
    } catch (error) {
        throw new ApiError(httpStatus.UNAUTHORIZED, error);
    }
};

const searchMoviesByGenres = async (id) => {
    const genre = await dB.genres.findOne({where: {id}})
    const movies = await dB.movies.findAll({
        where: {
            isActive: true,
            genre,
        },
        include: "genre"
    })
    return movies;
};

const searchMoviesByYear = async (releaseYear) => {
    const movies = await dB.movies.findAll({
        where: {
            isActive: true,
            releaseYear,
        }
    })
    return movies;
};

const movieStream = async (req, res) => {

    
    const {originalUrl, headers, query, movie} = req;
    const tisMovie = await dB.movies.findOne({where: {id: movie, isActive: true}})
    if(!tisMovie) {res.end()}
    else { const fileName = tisMovie.movieLocation
    console.log("This is: ",tisMovie)
    range = headers.range;

    const videoPath = `./../api/public/${fileName}`;
    const videoSize = fs.statSync(videoPath).size;
    const maxChunkSize = 1 * 1024 * 1024; // 1MB
    const maxChunks = 10;

    if(!range) {
        res.end()
    } else {

    const positions = range.replace(/bytes=/, '').split('-');
    const start = parseInt(positions[0], 10);
    let end = positions[1] ? parseInt(positions[1], 10) : videoSize - 1;

    if (end - start > maxChunkSize) {
        end = start + maxChunkSize;
    }

    // Check if the requested number of chunks exceeds the maximum
    if (Math.ceil((end - start + 1) / maxChunkSize) > maxChunks) {
        end = start + maxChunkSize * maxChunks;
    }

    // Ensure the end of the range does not exceed the end of the video
    if (end > videoSize - 1) {
        end = videoSize - 1;
    }

    res.statusCode = 206;
    res.setHeader('Content-Range', `bytes ${start}-${end}/${videoSize}`);
    res.setHeader('Accept-Ranges', 'bytes');
    res.setHeader('Content-Length', end - start + 1);
    res.setHeader('Content-Type', 'video/mp4');

    fs.createReadStream(videoPath, { start, end }).pipe(res);
}}
}

const movieDownload = async (req, res) => {

    
    const {movie, moviePx} = req;
    const tisMovie = await dB.movies.findOne({where: {id: movie, isActive: true}})
    if(!tisMovie) {res.end()}
    else { const fileName = tisMovie.movieLocation
        const filArr = fileName.split('.')
    const downloadName = `${filArr[0]}_Smovies.net.${filArr[1]}`

    const videoPath = `./public/${fileName}`;

   

    res.statusCode = 200;
    res.setHeader('Content-Disposition', `attachment; filename=${downloadName}`);
    res.setHeader('Content-Type', 'video/mp4');

    fs.createReadStream(videoPath).pipe(res);}

}


const movieUpload = async (req, res) => {
    if(!req.files.movie || !req.files.thumbNail) {
        // res.status(httpStatus.BAD_REQUEST).send()
        throw new ApiError(httpStatus.UNAUTHORIZED, 'There must be "movie" field as well as "thumbNail" field');
    } else {
        // http://localhost:7227/filler/pictures/thumbNail-1675451197326-760112574.png
    const { 
        countryId,
        movieTitle,
        movieDescription,
        releaseYear,
        movieCast,
        movieDirector,
        movieDuration,
        watchedBy,
        isActive,
        special,
        genreId,
    } = req.body

    // console.log(req.file)
    // console.log(req.files)

    const movieLocation = req.files?.movie[0].filename
    const movieThumbNail = `${auth.thumbnails_path}${req.files?.thumbNail[0].filename}`;

    // console.log(movieLocation, "\n", movieThumbnail)
    // console.log(req.body)

    try {
        await dB.movies.create({
            countryId,
            genreId,
            isActive,
            movieCast,
            movieDescription,
            movieDirector,
            movieDuration,
            movieLocation,
            movieThumbNail,
            movieTitle,
            releaseYear,
            special,
            watchedBy,
        })
    } catch (error) {
        throw new ApiError(httpStatus.UNAUTHORIZED, error);
    }
    // res.end()
    }
}

module.exports = {
    moviesWithoutAuth,
    moviesWithAuth,
    searchMoviesByGenres,
    searchMoviesByYear,
    movieStream,
    movieDownload,
    movieUpload,
    getGenres,
    getCountries,
}