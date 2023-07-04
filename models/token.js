const { tokenTypes } = require('../config/tokens');
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Tokens = new Schema({
        token: {
          type: String,
          required: true,
          trim: true,
          index: true,
        },
        user: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
          enum: [tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL, tokenTypes.ACCESS],
        },
        expires : {
          type: Date,
          required: true,
        },
       
}, { timestamps: true })


module.exports = Tokens

