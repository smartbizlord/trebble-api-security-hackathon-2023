const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const authController = require('../../controllers/auth.controller');
const auth = require('../../middlewares/auth');
const { verifyToken } = require('../../middlewares/verify');
const { authLimiter } = require('../../middlewares/rateLimiter');
const { allowedMethod } = require('../../middlewares/headers');
const config = require('../../config/auth');
const { unAllowedMethod } = require('../../middlewares/method');
const cache = require('../../utils/cache');


const router = express.Router();


if (config.env == 'production') {
    router.use(authLimiter)
}
router.use(allowedMethod)

router.route('/register')
    .post(allowedMethod, validate(authValidation.register), authController.register)
    .all(unAllowedMethod)
router.route('/login')
    .post(allowedMethod, validate(authValidation.login), authController.login)
    .all(unAllowedMethod)
router.route('/logout')
    .post(cache.route(), allowedMethod, validate(authValidation.logout), authController.logout)
    .all(unAllowedMethod)
router.route('/refresh-tokens')
    .post(allowedMethod, validate(authValidation.refreshTokens), authController.refreshTokens)
    .all(unAllowedMethod)
router.route('/forgot-password')
    .post(allowedMethod, validate(authValidation.forgotPassword), authController.forgotPassword)
    .all(unAllowedMethod)
router.route('/reset-password')
    .post(allowedMethod, validate(authValidation.resetPassword), authController.resetPassword)
    .all(unAllowedMethod)
router.route('/send-verification-email')
    .post(allowedMethod, verifyToken, auth(), validate(authValidation.sendverifyEmail), authController.sendVerificationEmail)
    .all(unAllowedMethod)
router.route('/verify-email')
    .post(allowedMethod, validate(authValidation.verifyEmail), authController.verifyEmail)
    .all(unAllowedMethod)

module.exports = router;