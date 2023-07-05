const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { movieService } = require('../services');
const pick = require('../utils/pick');

const uploadMovies = catchAsync(async (req, res) => {
    
    await movieService.movieUpload(req, res)
    res.status(httpStatus.NO_CONTENT).send({
        message : "Movie upload successful"
      });
})

const updateMovie = catchAsync(async (req, res) => {
    const id  = req.params.id;
    const updatedMovie = await movieService.updateMovie(id, req.body)
    if(updatedMovie) {
        res.status(httpStatus.OK).send(updatedMovie);
    }
    else {
        res.status(httpStatus.NOT_FOUND).send({message: "Movie not found"})
    }
})

const deleteMovie = catchAsync(async (req, res) => {
    const id  = req.params.id;
    const deletedMovie = await movieService.deleteMovie(id)
    if(deletedMovie) {
        res.status(httpStatus.OK).send(deletedMovie);
    }
    else {
        res.status(httpStatus.NOT_FOUND).send({message: "Movie not found"})
    }
})

const deleteGenre = catchAsync(async (req, res) => {
    const id  = req.params.id;
    const deletedGenre = await movieService.deleteGenre(id)
    if(deletedGenre) {
        res.status(httpStatus.OK).send(deletedGenre);
    }
    else {
        res.status(httpStatus.NOT_FOUND).send({message: "Genre not found"})
    }
})

const deleteCountry = catchAsync(async (req, res) => {
    const id  = req.params.id;
    const deletedCountry = await movieService.deleteCountry(id)
    if(deletedCountry) {
        res.status(httpStatus.OK).send(deletedCountry);
    }
    else {
        res.status(httpStatus.NOT_FOUND).send({message: "Country not found"})
    }
})

const getMovies = catchAsync(async (req, res) => {
    const page = pick(req.query, ['page']);
    const limit = pick(req.query, ['limit']);
    const movies = await movieService.moviesWithoutAuth(limit.limit, page.page);
    res.status(httpStatus.OK).send(movies)
});

const getGenres = catchAsync(async (req, res) => {
    const page = pick(req.query, ['page']);
    const limit = pick(req.query, ['limit']);
    const genres = await movieService.getGenres(limit.limit, page.page);
    res.status(httpStatus.OK).send(genres)
});

const updateGenres = catchAsync(async (req, res) => {
    const page = pick(req.query, ['page']);
    const limit = pick(req.query, ['limit']);
    const genres = await movieService.getGenres(limit.limit, page.page);
    res.status(httpStatus.OK).send(genres)
});

const getCountries = catchAsync(async (req, res) => {
    const countries = await movieService.getCountries();
    res.status(httpStatus.OK).send(countries)
});

const getMoviesById = catchAsync(async (req, res) => {
    const id = req.params.id;
    const movies = await movieService.moviesWithoutAuthById(id);
    if(!movies) {
        res.status(httpStatus.NOT_FOUND).send({message: "Couldn't find the resource"})
    }
    res.status(httpStatus.OK).send(movies)
});

const getGenresById = catchAsync(async (req, res) => {
    const id = req.params.id;
    const genres = await movieService.getGenresById(id);
    if(!genres) {
        res.status(httpStatus.NOT_FOUND).send({message: "Couldn't find the resource"})
    }
    res.status(httpStatus.OK).send(genres)
});

const getCountriesById = catchAsync(async (req, res) => {
    const id = req.params.id;
    const countries = await movieService.getCountriesById(id);
    if(!countries) {
        res.status(httpStatus.NOT_FOUND).send({message: "Couldn't find the resource"})
    }
    res.status(httpStatus.OK).send(countries)
});

const addGenres = catchAsync(async (req, res) => {
    const genres = await movieService.addGenres(req.body);
    res.status(httpStatus.CREATED).send(genres)
});

const addCountries = catchAsync(async (req, res) => {
    const countries = await movieService.addCountries(req.body);
    res.status(httpStatus.CREATED).send(countries)
});





module.exports = {
    getMovies,
    getGenres,
    getCountries,
    getMoviesById,
    getGenresById,
    getCountriesById,
    uploadMovies,
    addGenres,
    addCountries,
    updateGenres,
    updateMovie,
    deleteMovie,
    deleteGenre,
    deleteCountry,
}