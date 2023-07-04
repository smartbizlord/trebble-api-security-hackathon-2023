const validator = require('validator');
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Users = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator(value) {
        if (!validator.isEmail(value)) {
          return false
        } else {
          return true
        }
      },
      message: 'Invalid email',
    }
  },
  profileImage : {
    type : String,
    required : false,
    min : 15
  },
  phoneNumber : {
    type : String,
    required : false,
    validate: {
      validator(value) { return true }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: 8,
    validate: {
      validator(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          return false
        } else {
          return true
        }
      },
      message: 'Password must contain at least one letter and one number',
    }
  },
  gender : {
    type: String,
    enum: ['Male', 'Female'],
  },
  userRole : {
    type : String,
    enum: ['user', 'admin', 'super'],
    default: 'user'
  },
  isEmailVerified: {
    type: Boolean,
  },
  isPhoneVerified: {
    type: Boolean,
  },
  blacklisted: {
    type: Boolean,
  },
  lastLogin : Date,
}, { timestamps: true })


module.exports = Users

