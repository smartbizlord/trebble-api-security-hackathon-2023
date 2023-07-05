const httpStatus = require("http-status")




const unAllowedMethod = (req, res) => {
    res.status(httpStatus.METHOD_NOT_ALLOWED).send({message: "Method not allowed!"})
}

module.exports = {
    unAllowedMethod,
}