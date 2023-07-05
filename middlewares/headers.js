const httpStatus = require("http-status")

const jsonHeader = (req, res, next) => {
    res.setHeader("Content-Type", "application/json")
    res.setHeader(`Accept`, "application/json")
    res.setHeader("X-Content-Type-Options", "nosniff")
    res.setHeader("X-Frame-Options", "deny")
    res.setHeader("Content-Security-Policy", "default-src 'self'; connect-src 'self'; font-src 'self'; frame-src 'self'; img-src 'self'; manifest-src 'self'; media-src 'self'; object-src 'self'; style-src 'self'; worker-src 'self'")
    res.setHeader("Strict-Transport-Security", "max-age=63072000")
    if(req.headers.accept != "application/json") {
        return next(new ApiError(httpStatusus.BAD_REQUEST, {
            message: "Accept Header is missing from the request"
        }));
    }else {
        next()
    }
}

const allowedMethod = (req, res, next) => {
    res.setHeader("Allow", req.method)
    next()
}


module.exports = {
    jsonHeader,
    allowedMethod,
}