const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Notifications = new Schema({
        title: {
          type: String,
          required: true,
          trim: true,
        },
        content: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
          enum: ['Male', 'Female'],
        },
        isRead: {
          type: Boolean,
        },
}, { timestamps: true })


module.exports = Notifications

