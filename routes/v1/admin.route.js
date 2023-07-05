const express = require('express');
const validate = require('../../middlewares/validate');
const movieValidation = require('../../validations/movie.validation');
const authValidation = require('../../validations/auth.validation');
const movieController = require('../../controllers/movie.controller');
const auth = require('../../middlewares/auth');
const { verifyToken } = require('../../middlewares/verify');
const { uploadMovieWithThumbNail} = require('../../middlewares/upload');
const { normalLimiter } = require('../../middlewares/rateLimiter');
const { allowedMethod } = require('../../middlewares/headers');
const config = require('../../config/auth');
const { unAllowedMethod } = require('../../middlewares/method');
const { userController } = require('../../controllers');
const cache = require('../../utils/cache');


const router = express.Router();


if (config.env == 'production') {
    router.use(normalLimiter)
    router.use(verifyToken)
}

router.route('/movies')
    .get(cache.route(1800), allowedMethod, auth("getMovies"), validate(movieValidation.getWithPagination), movieController.getMovies)
    .post(allowedMethod, auth("uploadMovies"), validate(movieValidation.uploadMovies), uploadMovieWithThumbNail.fields([{ name: 'movie', maxCount: 1 }, { name: 'thumbNail', maxCount: 1 }]), movieController.uploadMovies)
    .all(unAllowedMethod)

router.route('/genres')
    .get(cache.route(1800), allowedMethod, auth("getGenres"), validate(movieValidation.getWithPagination), movieController.getGenres)
    .post(allowedMethod, auth("createGenres"), validate(movieValidation.addMovieGenre), movieController.addGenres)
    .all(unAllowedMethod)

router.route('/countries')
    .get(cache.route(1800), allowedMethod, auth("getCountries"), validate(movieValidation.getWithPagination), movieController.getCountries)
    .post(allowedMethod, auth("createCountry"), validate(movieValidation.addMovieCountry), movieController.addCountries)
    .all(unAllowedMethod)

router.route('/users')
    .get(cache.route(1800), allowedMethod, auth("getUsers"), validate(movieValidation.getWithPagination), userController.getUsers)
    .post(allowedMethod, auth("manageUsers"), validate(authValidation.register), userController.createUser)
    .all(unAllowedMethod)



router.route('/movies/:id')
    .get(cache.route(1800), allowedMethod, auth("getMovies"), validate(movieValidation.getById), movieController.getMoviesById)
    .patch(allowedMethod, auth("editMovies"), validate(movieValidation.updateMovie), movieController.updateMovie)
    .delete(allowedMethod, auth("deleteMovies"), validate(movieValidation.deleteById), movieController.deleteMovie)
    .all(unAllowedMethod)

router.route('/genres/:id')
    .get(cache.route(1800), allowedMethod, auth("getGenres"), validate(movieValidation.getById), movieController.getGenresById)
    .delete(allowedMethod, auth("deleteGenres"), validate(movieValidation.deleteById), movieController.deleteGenre)
    .all(unAllowedMethod)

router.route('/countries/:id')
    .get(cache.route(1800), allowedMethod, auth("getCountries"), validate(movieValidation.getById), movieController.getCountriesById)
    .delete(allowedMethod, auth("deleteCountries"), validate(movieValidation.deleteById), movieController.deleteCountry)
    .all(unAllowedMethod)

router.route('/users/:id')
    .get(cache.route(1800), allowedMethod, auth("getUser"), validate(movieValidation.getById), userController.getUser)
    .patch(allowedMethod, auth("manageUsers"), validate(authValidation.updateUser), userController.updateUser)
    .delete(allowedMethod, auth("manageUsers"), validate(authValidation.deleteUser), userController.deleteUser)
    .all(unAllowedMethod)




module.exports = router;