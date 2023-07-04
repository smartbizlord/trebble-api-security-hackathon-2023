const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: {message: "Too many requests!"},
  skipSuccessfulRequests: true,
});

const normalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {message: "Rate limit Exceeded!"}
})

module.exports = {
  authLimiter,
  normalLimiter
};
