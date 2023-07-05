const mongoose = require("mongoose")
const {mongooseP} = require('../config/auth');
const logger = require('../config/logger');
const country = require('./country')
const genre = require('./genre')
const movie = require('./movie')
const notification = require('./notification')
const token = require('./token')
const user = require('./user')

const mongooseInstance = mongoose.connect(mongooseP.url)
const dB = {};


mongooseInstance
.then(async() => {
  logger.info('Database is good');
})
.catch(err => {
  logger.error('Database no dey work', err);
})

dB.mongo = mongooseInstance

dB.countries = mongoose.model('Country', country)
dB.genres = mongoose.model('Genre', genre)
dB.movies = mongoose.model('Movie', movie)
dB.notifications = mongoose.model('Notification', notification)
dB.tokens = mongoose.model('Token', token)
dB.users = mongoose.model('User', user)



module.exports = {
  dB
};