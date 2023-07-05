const express = require('express');
const validate = require('../../middlewares/validate');
const movieValidation = require('../../validations/movie.validation');
const movieController = require('../../controllers/movie.controller');
const auth = require('../../middlewares/auth');
const { verifyToken } = require('../../middlewares/verify');
const { normalLimiter } = require('../../middlewares/rateLimiter');
const { allowedMethod } = require('../../middlewares/headers');
const config = require('../../config/auth');
const { unAllowedMethod } = require('../../middlewares/method');
const cache = require('../../utils/cache');


const router = express.Router();


if (config.env == 'production') {
    router.use(normalLimiter)
    router.use(verifyToken)
}


router.route('/')
    .get(allowedMethod, auth("getMovies"), validate(movieValidation.getWithPagination), movieController.getMovies)
    .all(unAllowedMethod)

router.route('/genres')
    .get(allowedMethod, auth("getGenres"), validate(movieValidation.getWithPagination), movieController.getGenres)
    .all(unAllowedMethod)

router.route('/countries')
    .get(allowedMethod, auth("getCountries"), validate(movieValidation.getWithPagination), movieController.getCountries)
    .all(unAllowedMethod)

router.route('/:id')
    .get(cache.route(1800), allowedMethod, auth("getMovies"), validate(movieValidation.getById), movieController.getMoviesById)
    .all(unAllowedMethod)

router.route('/genres/:id')
    .get(cache.route(1800), allowedMethod, auth("getGenres"), validate(movieValidation.getById), movieController.getGenresById)
    .all(unAllowedMethod)

router.route('/countries/:id')
    .get(cache.route(1800), allowedMethod, auth("getCountries"), validate(movieValidation.getById), movieController.getCountriesById)
    .all(unAllowedMethod)




module.exports = router