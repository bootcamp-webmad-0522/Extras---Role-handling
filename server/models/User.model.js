const mongoose = require("mongoose")
const { Schema, model } = mongoose

const userSchema = new Schema({
  email: {
    type: String, unique: true, required: true
  },
  password: {
    type: String, required: true
  },
  username: {
    type: String, required: true
  },
  role: {
    type: String,
    enum: ['ADMIN', 'USER'],
    default: 'USER'
  }
})

module.exports = model("User", userSchema)