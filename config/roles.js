const allRoles = {
    user: ['getMovies', 'searchMovies', 'getGenres', 'getCountries',],
    admin: ['getUsers', 'manageUsers', 'getUser', 'getMovies', 'searchMovies', 'editMovies', 'getGenres', 'getCountries', 'downloadMovies', 'editGenres', 'uploadMovies', 'streamMovies', 'createGenres', 'createCountry', 'deleteMovies', 'deleteGenres', 'deleteCountries', ],
  };

  const roles = Object.keys(allRoles);
  const roleRights = new Map(Object.entries(allRoles));
  
  module.exports = {
    roles,
    roleRights,
  };
  