const express = require('express');
const authRoute = require('./auth.route');
const movieRoute = require('./movie.route');
const adminRoute = require('./admin.route');
const httpStatus = require('http-status');
const cache = require('../../utils/cache');


const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/movies',
    route: movieRoute,
  },
  {
    path: '/admins',
    route: adminRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* GET home page. */
router.get('/', cache.route(), function(req, res, next) {
  res.status(httpStatus.OK).json({deployed: true});
});

module.exports = router;

