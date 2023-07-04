const allRoles = {
    visitor: ['searchMovies', 'getGenres',],
    user: ['getUser', 'getMovies', 'searchMovies', 'getGenres', 'downloadMovies', 'streamMovies',],
    admin: ['getUsers', 'manageUsers', 'getUser', 'getMovies', 'searchMovies', 'editMovies', 'getGenres', 'downloadMovies', 'editGenres', 'uploadMovies', 'streamMovies',],
  };
  
  const roles = Object.keys(allRoles);
  const roleRights = new Map(Object.entries(allRoles));
  
  module.exports = {
    roles,
    roleRights,
  };
  