const cache = require('express-redis-cache')({ client: require('redis').createClient() })

module.exports = cache