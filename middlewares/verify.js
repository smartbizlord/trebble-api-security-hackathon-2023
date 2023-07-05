const { verify } = require("jsonwebtoken");
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const config = require('../config/auth');
const { dB } = require('../models');

let staticy;

verifyToken = async(req,res,next) => {
    let token = req.headers.authorization;
    if (!token) {
        return next(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
    }
    token = token.split(" ")[1];

    verify(token, config.jwt.secret, async(err, decoded) => {
        if(err) {
            return next(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
        }
        staticy = decoded.sub;
        req.user = await dB.users.findOne( { id : staticy } );
        next();
    })
    
     
}

verifyQueryToken = async(req,res,next) => {
    let token = req.query.token;
    if (!token) {
        return next(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
    }

    verify(token, config.jwt.secret, async(err, decoded) => {
        if(err) {
            return next(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
        }
        staticy = decoded.sub;
        req.user = await dB.users.findOne( { id : staticy } );
        next();
    })
    
     
}



const jwtAuth = {
    verifyToken,
    verifyQueryToken
}

module.exports = jwtAuth;